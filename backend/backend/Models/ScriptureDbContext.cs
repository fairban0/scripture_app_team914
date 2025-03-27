using Microsoft.EntityFrameworkCore;

namespace backend.Models;


public class ScriptureDbContext : DbContext
{
    public ScriptureDbContext(DbContextOptions<ScriptureDbContext> options) : base(options)
    {

    }
    public DbSet<User> Users { get; set; }
    public DbSet<Login> Logins { get; set; }

    public DbSet<Settings> Settings { get; set; }
    
   protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure one-to-one relationship between User and Setting
            modelBuilder.Entity<User>()
                .HasOne(u => u.Settings)
                .WithOne(s => s.User)
                .HasForeignKey<Settings>(s => s.user_id);
        }

}
