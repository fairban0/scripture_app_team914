using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")] // Explicitly set the route to "api/scripture"
    [ApiController]
    public class ScriptureController : ControllerBase
    {
        private ScriptureDbContext _scriptContext;

        public ScriptureController(ScriptureDbContext temp)
        {
            _scriptContext = temp;
        }

        // POST: /api/scripture/comments
        [HttpPost("comments")] // Ensure this matches the frontend request
        public IActionResult PostComment([FromBody] Comment comment)
        {
            if (comment == null || string.IsNullOrEmpty(comment.content))
            {
                return BadRequest(new { message = "Invalid comment data." });
            }

            Console.WriteLine($"Received comment: user_id={comment.user_id}, content={comment.content}");

            try
            {
                _scriptContext.Comments.Add(comment);
                _scriptContext.SaveChanges();
                return Ok(new { message = "Comment saved successfully." });
            }
            catch (DbUpdateException dbEx)
            {
                return StatusCode(500, new { message = "Database update error.", error = dbEx.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while saving the comment.", error = ex.Message });
            }
        }

        // GET: /api/scripture/comments/{userId}/{scriptureId}
        [HttpGet("comments/{userId}/{scriptureId}")]
        public IActionResult GetComment(int userId, int scriptureId)
        {
            try
            {
                var comment = _scriptContext.Comments
                    .FirstOrDefault(c => c.user_id == userId);

                if (comment == null)
                {
                    return NotFound(new { message = "No comment found for the specified user and scripture." });
                }

                return Ok(comment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while fetching the comment.", error = ex.Message });
            }
        }

        // PUT: /api/scripture/comments/{commentId}
        [HttpPut("updateComment/{comment_id}")]
        public IActionResult UpdateComment(int comment_id, [FromBody] Comment updatedComment)
        {
            if (updatedComment == null || string.IsNullOrEmpty(updatedComment.content))
            {
                Console.WriteLine("Invalid comment data received.");
                return BadRequest(new { message = "Invalid comment data. All fields are required." });
            }

            Console.WriteLine($"Received payload for update: comment_id={comment_id}, user_id={updatedComment.user_id}, scripture_id={updatedComment.scripture_id}, content={updatedComment.content}");

            try
            {
                var existingComment = _scriptContext.Comments.Include(c => c.User).FirstOrDefault(c => c.comment_id == comment_id);

                if (existingComment == null)
                {
                    Console.WriteLine($"Comment with ID {comment_id} not found.");
                    return NotFound(new { message = "Comment not found." });
                }

                // Ensure the user exists in the database
                var user = _scriptContext.Users.FirstOrDefault(u => u.user_id == updatedComment.user_id);
                if (user == null)
                {
                    Console.WriteLine($"User with ID {updatedComment.user_id} not found.");
                    return BadRequest(new { message = "Invalid user data. User not found." });
                }

                if (string.IsNullOrEmpty(user.email) || string.IsNullOrEmpty(user.first_name) || string.IsNullOrEmpty(user.last_name))
                {
                    Console.WriteLine($"User data is incomplete: email={user.email}, first_name={user.first_name}, last_name={user.last_name}");
                    return BadRequest(new { message = "Invalid user data. Ensure all required fields are provided." });
                }

                // Overwrite all fields of the existing comment
                existingComment.user_id = updatedComment.user_id;
                existingComment.scripture_id = updatedComment.scripture_id;
                existingComment.content = updatedComment.content;
                existingComment.timestamp = DateTime.UtcNow; // Update the timestamp to the current time

                Console.WriteLine("Updating comment in the database...");
                _scriptContext.Comments.Update(existingComment);
                _scriptContext.SaveChanges();
                Console.WriteLine("Comment updated successfully.");

                // Return a simplified object to avoid cyclic references
                var response = new
                {
                    existingComment.comment_id,
                    existingComment.content,
                    existingComment.timestamp,
                    existingComment.user_id,
                    existingComment.scripture_id
                };

                return Ok(response);
            }
            catch (DbUpdateException dbEx)
            {
                Console.WriteLine($"Database update error: {dbEx.Message}");
                return StatusCode(500, new { message = "A database error occurred while updating the comment.", error = dbEx.Message });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Unexpected error: {ex.Message}");
                return StatusCode(500, new { message = "An unexpected error occurred while updating the comment.", error = ex.Message });
            }
        }
    }
}