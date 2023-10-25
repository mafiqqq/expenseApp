using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExpenseAPI.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace ExpenseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseDetailController : ControllerBase
    {
        private readonly ExpenseDetailContext _context;

        public ExpenseDetailController(ExpenseDetailContext context)
        {
            _context = context;
        }

        // GET: api/ExpenseDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseDetail>>> GetExpenseDetails()
        {
            // Check if the table in db is found
            if (_context.ExpenseDetails == null)
              {
                  return NotFound();
              }

            return await _context.ExpenseDetails.ToListAsync();
        }

        // GET: api/ExpenseDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseDetail>> GetExpenseDetail(int id)
        {
          if (_context.ExpenseDetails == null)
          {
              return NotFound();
          }
            var expenseDetail = await _context.ExpenseDetails.FindAsync(id);

            if (expenseDetail == null)
            {
                return NotFound();
            }

            return expenseDetail;
        }

        // PUT: api/ExpenseDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpenseDetail(int id, ExpenseDetail expenseDetail)
        {
            if (id != expenseDetail.ExpenseId)
            {
                return BadRequest();
            }

            _context.Entry(expenseDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.ExpenseDetails.ToListAsync());
        }

        // POST: api/ExpenseDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExpenseDetail>> PostExpenseDetail(ExpenseDetail expenseDetail)
        {
          if (_context.ExpenseDetails == null)
          {
              return Problem("Entity set 'ExpenseDetailContext.ExpenseDetails'  is null.");
          }
            _context.ExpenseDetails.Add(expenseDetail);
            await _context.SaveChangesAsync();

            // This will return the newly created obj
            //return CreatedAtAction("GetExpenseDetail", new { id = expenseDetail.ExpenseId }, expenseDetail);

            return Ok(await _context.ExpenseDetails.ToListAsync());
        }

        // DELETE: api/ExpenseDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpenseDetail(int id)
        {
            if (_context.ExpenseDetails == null)
            {
                return NotFound();
            }
            var expenseDetail = await _context.ExpenseDetails.FindAsync(id);
            if (expenseDetail == null)
            {
                return NotFound();
            }

            _context.ExpenseDetails.Remove(expenseDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.ExpenseDetails.ToListAsync());
        }

        private bool ExpenseDetailExists(int id)
        {
            return (_context.ExpenseDetails?.Any(e => e.ExpenseId == id)).GetValueOrDefault();
        }
    }
}
