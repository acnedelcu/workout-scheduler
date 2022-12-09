using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;

namespace WorkoutScheduler.Data.Repositories
{
    public class ScheduleRepository : BaseRepository<Schedule>, IScheduleRepository
    {
        public ScheduleRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
