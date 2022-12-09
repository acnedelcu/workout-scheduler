using Microsoft.AspNetCore.Mvc;
using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;
using static Duende.IdentityServer.Models.IdentityResources;

namespace WorkoutScheduler.Controllers
{
   [ApiController]
   [Route("[controller]/[action]")]
   public class TrainingController : ControllerBase
   {
      private readonly IUnitOfWork _unitOfWork;

      public TrainingController(IUnitOfWork unitOfWork)
      {
         _unitOfWork = unitOfWork;
      }

      [HttpGet]
      public async Task<IActionResult> GetAll()
      {
         var trainings = _unitOfWork.Training.GetAll();
         return Ok(trainings);
      }

      [HttpGet]
      public IActionResult GetById(object id)
      {
         var training = _unitOfWork.Training.GetById(id);
         return Ok(training);
      }

      [HttpPost]
      public IActionResult Update(Training training)
      {
         _unitOfWork.Training.Update(training);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Delete(Training training)
      {
         _unitOfWork.Training.Delete(training);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpGet]
      public IActionResult Delete(object id)
      {
         _unitOfWork.Training.Delete(id);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Add(Training training)
      {
         _unitOfWork.Training.Insert(training);
         _unitOfWork.Complete();
         return Ok();
      }

   }
}
