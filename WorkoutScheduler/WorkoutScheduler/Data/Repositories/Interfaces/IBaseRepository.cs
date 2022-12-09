using System.Linq.Expressions;

namespace WorkoutScheduler.Data.Repositories.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        void Insert(T entity);

        void Update(T entity);

        T GetById(object id);

        IEnumerable<T> GetAll();

        void Delete(object id);

        void Delete(T entity);
    }
}
