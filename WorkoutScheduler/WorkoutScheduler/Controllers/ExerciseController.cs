using Microsoft.AspNetCore.Mvc;
using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;

namespace WorkoutScheduler.Controllers
{
   [ApiController]
   [Route("[controller]/[action]")]
   public class ExerciseController : ControllerBase
   {
      private readonly IUnitOfWork _unitOfWork;

      public ExerciseController(IUnitOfWork unitOfWork)
      {
         _unitOfWork = unitOfWork;
      }

      [HttpGet]
      public IActionResult GetAll()
      {
         var exercises = _unitOfWork.Exercises.GetAll();
         return Ok(exercises);
      }

      [HttpGet]
      public IActionResult GetById(object id)
      {
         var exercise = _unitOfWork.Exercises.GetById(id);
         return Ok(exercise);
      }

      [HttpPost]
      public IActionResult Update(Exercise exercise)
      {
         _unitOfWork.Exercises.Update(exercise);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Delete(Exercise exercise)
      {
         _unitOfWork.Exercises.Delete(exercise);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpGet]
      public IActionResult Delete(object id)
      {
         _unitOfWork.Exercises.Delete(id);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Add(Exercise exercise)
      {
         _unitOfWork.Exercises.Insert(exercise);
         _unitOfWork.Complete();
         return Ok();
      }
   }
}
