using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using backend.Models;
using System.Collections.Generic;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ScriptureDbContext _context;

        public LoginController(ScriptureDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetLogin()
        {
            // Retrieve all login records from the database
            var logins = await _context.Logins
                .ToListAsync();

            // Return the list of login records
            return Ok(logins);
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { message = "Username and Password are required." });
            }

            // Find user by username (no need for user_id check)
            var user = await _context.Logins
                .Include(u => u.User) // Include User entity in the query
                .FirstOrDefaultAsync(u => u.username == request.Username);

            if (user == null || user.password_hash != request.Password)  // No hashing, just checking raw password
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

            return Ok(new LoginResponseDTO
            {
                UserId = user.user_id,
                UserName = user.username,
                Password = user.password_hash// Replace with actual JWT token if needed
            });
        }
    }

    public class LoginRequestDTO
    {
        public required string Username { get; set; }  // Changed from Identifier
        public required string Password { get; set; }
    }

    public class LoginResponseDTO
    {
        public int UserId { get; set; }
        public required string UserName { get; set; }
        public required string Password { get; set; }
    }
}
