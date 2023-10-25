using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseAPI.Models
{
    public class ExpenseDetail
    {
        [Key]
        public int ExpenseId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ExpenseName { get; set; } = "";
        [Column(TypeName = "nvarchar(25)")]
        public string ExpenseCategory { get; set; } = "";
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime ExpenseDate { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal ExpenseAmount { get; set; }

    }
}
