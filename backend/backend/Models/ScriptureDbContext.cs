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
    public DbSet<Comment> Comments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure one-to-one relationship between User and Settings
        modelBuilder.Entity<User>()
            .HasOne(u => u.Settings)
            .WithOne(s => s.User)
            .HasForeignKey<Settings>(s => s.user_id);

        // Reconfigure one-to-many relationship between User and Comment
        modelBuilder.Entity<User>()
            .HasMany(u => u.Comments)
            .WithOne(c => c.User)
            .HasForeignKey(c => c.user_id);

        // Configure Comment primary key
        modelBuilder.Entity<Comment>()
            .HasKey(c => c.comment_id);
    }
}
