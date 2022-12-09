using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;

namespace WorkoutScheduler.Data.Repositories
{
    public class DetailRepository : BaseRepository<Detail>, IDetailRepository
    {
        public DetailRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
