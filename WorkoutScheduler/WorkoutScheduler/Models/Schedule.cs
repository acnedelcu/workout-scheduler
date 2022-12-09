namespace WorkoutScheduler.Models
{
   public class Schedule
   {
      public int Id { get; set; }
      public DateTime Date { get; set; }
     

      public List<Training> Trainings { get; set; }
      public List<Detail> Details { get; set; }
   }
}
