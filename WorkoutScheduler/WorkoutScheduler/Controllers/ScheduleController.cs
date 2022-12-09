using Microsoft.AspNetCore.Mvc;
using WorkoutScheduler.Data.Repositories.Interfaces;
using WorkoutScheduler.Models;

namespace WorkoutScheduler.Controllers
{
   [ApiController]
   [Route("[controller]/[action]")]
   public class ScheduleController : ControllerBase
   {
      private readonly IUnitOfWork _unitOfWork;

      public ScheduleController(IUnitOfWork unitOfWork)
      {
         _unitOfWork = unitOfWork;
      }

      [HttpGet]
      public IActionResult GetAll()
      {
         var schedules = _unitOfWork.Schedules.GetAll();
         return Ok(schedules);
      }

      [HttpGet]
      public IActionResult GetById(object id)
      {
         var schedule = _unitOfWork.Schedules.GetById(id);
         return Ok(schedule);
      }

      [HttpPost]
      public IActionResult Update(Schedule schedule)
      {
         _unitOfWork.Schedules.Update(schedule);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Delete(Schedule schedule)
      {
         _unitOfWork.Schedules.Delete(schedule);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpGet]
      public IActionResult Delete(object id)
      {
         _unitOfWork.Schedules.Delete(id);
         _unitOfWork.Complete();
         return Ok();
      }

      [HttpPost]
      public IActionResult Add(Schedule schedule)
      {
         _unitOfWork.Schedules.Insert(schedule);
         _unitOfWork.Complete();
         return Ok();
      }
   }
}
