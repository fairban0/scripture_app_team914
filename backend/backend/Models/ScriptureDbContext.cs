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
    public DbSet<Annotation> Annotations { get; set; }
    
   protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure one-to-one relationship between User and Setting
            modelBuilder.Entity<User>()
                .HasOne(u => u.Settings)
                .WithOne(s => s.User)
                .HasForeignKey<Settings>(s => s.user_id);

            // Configure one-to-one relationship between User and Annotation
            modelBuilder.Entity<User>()
                .HasOne(u => u.Annotation)
                .WithOne(a => a.User)
                .HasForeignKey<Annotation>(a => a.user_id);

            // Ensure Annotation relationships are properly configured
            modelBuilder.Entity<Annotation>()
                .HasKey(a => a.annotation_id); // Ensure primary key is set

            modelBuilder.Entity<Annotation>()
                .HasOne(a => a.User)
                .WithOne(u => u.Annotation)
                .HasForeignKey<Annotation>(a => a.user_id)
                .OnDelete(DeleteBehavior.Cascade); // Handle cascading deletes
        }

}
