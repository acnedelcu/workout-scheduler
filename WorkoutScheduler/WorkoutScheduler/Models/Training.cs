namespace WorkoutScheduler.Models
{
   public class Training
   {
      public int Id { get; set; }
      public string Name { get; set; }
      public List<Exercise> Exercises { get; set; }
   }
}
