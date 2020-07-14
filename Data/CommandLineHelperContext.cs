using Microsoft.EntityFrameworkCore;
using CommandLineHelper.Models;

namespace CommandLineHelper.Data
{
    public class CommandLineHelperContext : DbContext
    {
        public CommandLineHelperContext(DbContextOptions<CommandLineHelperContext> opt) : base(opt)
        {
            
        }

        public DbSet<Command> Commands { get; set; }
    }
}