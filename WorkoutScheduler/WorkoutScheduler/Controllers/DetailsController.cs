using Microsoft.AspNetCore.Mvc;
using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;

namespace WorkoutScheduler.Controllers
{
   [ApiController]
   [Route("[controller]/[action]")]
   public class DetailsController : ControllerBase
   {
      private readonly IUnitOfWork _unitOfWork;

      public DetailsController(IUnitOfWork unitOfWork)
      {
         _unitOfWork = unitOfWork;
      }

      [HttpGet]
      public IActionResult GetAll()
      {
         var details = _unitOfWork.Details.GetAll();
         return Ok(details);
      }

      [HttpGet]
      public IActionResult GetById(object id)
      {
         var detail = _unitOfWork.Details.GetById(id);
         return Ok(detail);
      }

      [HttpPost]
      public IActionResult Update(Detail detail)
      {
         _unitOfWork.Details.Update(detail);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Delete(Detail detail)
      {
         _unitOfWork.Details.Delete(detail);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpGet]
      public IActionResult Delete(object id)
      {
         _unitOfWork.Details.Delete(id);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Add(Detail detail)
      {
         _unitOfWork.Details.Insert(detail);
         _unitOfWork.Complete();
         return Ok();
      }
   }
}
