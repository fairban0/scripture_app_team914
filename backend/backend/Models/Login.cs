using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("Login")] // Explicitly map to the database table "Login"
public class Login
{
    [Key]
    public string username { get; set; }

    [Required]
    public string password_hash { get; set; }

    // Foreign Key Relationship with User
    [ForeignKey(nameof(User))] // Reference the navigation property, not the column name
    public int user_id { get; set; }
    
    public User? User { get; set; }
}
