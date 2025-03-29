using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("Annotation")]
public class Annotation
{
    [Key]
    public int annotation_id { get; set; } // Add this primary key property

    [Required]
    [ForeignKey("User")]
    public int user_id { get; set; }

    public User User { get; set; } // Navigation property for one-to-one relationship

    [Required]
    public string annotation { get; set; }

    public DateTime created_at { get; set; } = DateTime.UtcNow;
}