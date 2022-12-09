namespace WorkoutScheduler.Data.Repositories.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        IDetailRepository Details { get; }
        IExerciseRepository Exercises { get; }
        ITrainingRepository Training { get; }
        IScheduleRepository Schedules { get; }
        int Complete();
    }
}
