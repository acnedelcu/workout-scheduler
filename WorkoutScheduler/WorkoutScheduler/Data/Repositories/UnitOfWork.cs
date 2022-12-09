using WorkoutScheduler.Data.Repositories.Interfaces;

namespace WorkoutScheduler.Data.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public IDetailRepository Details { get; private set; }

        public IExerciseRepository Exercises { get; private set; }

        public ITrainingRepository Training { get; private set; }

        public IScheduleRepository Schedules { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Details = new DetailRepository(_context);
            Exercises = new ExerciseRepository(_context);   
            Training = new TrainingRepository(_context);
            Schedules = new ScheduleRepository(_context);
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
