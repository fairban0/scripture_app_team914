using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models;

[Table("User")]
public class User
{
    [Key]
    public int user_id { get; set; }
    [Required]
    public string first_name { get; set; }
    [Required]
    public string last_name { get; set; }

    public byte[]? profile_picture { get; set; }
    [Required]
    public string email { get; set; }
    [ForeignKey("settings_id")]
    public int? account_settings {get;set;}
    public Settings? Settings{get;set;}

    
   
}