using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Reflection;
using System.Security;
using System.Text.RegularExpressions;
using WorkoutScheduler.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace WorkoutScheduler.Data
{
   public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
   {
      public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
          : base(options, operationalStoreOptions)
      {
      }

      public override DbSet<ApplicationUser> Users { get; set; }
      public virtual DbSet<Exercise> Exercises { get; set; }
      public virtual DbSet<Schedule> Schedules { get; set; }
      public virtual DbSet<Training> Trainings { get; set; }
      public virtual DbSet<Detail> Details { get; set; }
   }
}