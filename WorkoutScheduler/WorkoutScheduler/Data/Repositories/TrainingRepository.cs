using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;

namespace WorkoutScheduler.Data.Repositories
{
    public class TrainingRepository : BaseRepository<Training>, ITrainingRepository
    {
        public TrainingRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}