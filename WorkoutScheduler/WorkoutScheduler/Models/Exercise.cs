﻿namespace WorkoutScheduler.Models
{
   public class Exercise
   {
      public int Id { get; set; }
      public string Name { get; set; }
      public int Sets { get; set; }

      public List<Detail> Details { get; set; }
   }
}
