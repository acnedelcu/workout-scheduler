using Microsoft.AspNetCore.Identity;

namespace WorkoutScheduler.Models
{
   public class ApplicationUser : IdentityUser
   {
      public List<Schedule> Schedules { get; set; }
   }
}