using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Customer_Management.Models;

namespace Customer_Management.Data
{
    public class Customer_ManagementContext : DbContext
    {
        public Customer_ManagementContext (DbContextOptions<Customer_ManagementContext> options)
            : base(options)
        {
        }

        public DbSet<Customer_Management.Models.Customers> Customers { get; set; }
    }
}
