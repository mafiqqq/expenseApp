using Microsoft.EntityFrameworkCore;

namespace ExpenseAPI.Models
{
    public class ExpenseDetailContext : DbContext
    {
        // Add a constructor
        public ExpenseDetailContext(DbContextOptions options) : base(options)
        {

        }
        // Add a property
        public DbSet<ExpenseDetail> ExpenseDetails { get; set; }

    }
}
