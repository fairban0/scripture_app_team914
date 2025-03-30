using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("Comment")]
public class Comment
{
    public int scripture_id;

    [Key]
    public int comment_id { get; set; } // Primary key

    [Required]
    [ForeignKey("User")]
    public int user_id { get; set; } // Foreign key to User table

    public User User { get; set; } // Navigation property for User

    [Required]
    public string content { get; set; } // Comment content

    [Required]
    public DateTime timestamp { get; set; } = DateTime.UtcNow; // Timestamp with default value
}