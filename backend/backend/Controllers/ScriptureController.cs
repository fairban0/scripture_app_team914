using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ScriptureController : ControllerBase
    {
        private ScriptureDbContext _scriptContext;

        public ScriptureController(ScriptureDbContext temp)
        {
            _scriptContext = temp;
        }

        // POST: /Scripture
        [HttpPost]
        public IActionResult PostAnnotation([FromBody] Annotation annotation)
        {
            if (annotation == null || string.IsNullOrEmpty(annotation.annotation))
            {
                return BadRequest(new { message = "Invalid annotation data." });
            }

            try
            {
                var existingAnnotation = _scriptContext.Annotations
                    .FirstOrDefault(a => a.user_id == annotation.user_id);

                if (existingAnnotation != null)
                {
                    // Update the existing annotation
                    existingAnnotation.annotation = annotation.annotation;
                    existingAnnotation.created_at = DateTime.UtcNow;
                }
                else
                {
                    // Add a new annotation
                    _scriptContext.Annotations.Add(annotation);
                }

                _scriptContext.SaveChanges();
                return Ok(new { message = "Annotation saved successfully." });
            }
            catch (DbUpdateException dbEx)
            {
                return StatusCode(500, new { message = "Database update error.", error = dbEx.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while saving the annotation.", error = ex.Message });
            }
        }
    }
}