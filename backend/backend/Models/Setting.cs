using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models;

public class Settings
{
    [Key]
    public int settings_id { get; set; }
    [Required]
    [ForeignKey("user_id")]
    public int user_id { get; set; }
    public User? User{get;set;}
    public bool? notifications_enabled { get; set; }
    public bool? offline_search_enabled { get; set; }

    public string? theme { get; set; }

    public string? language_preference { get; set; }

}