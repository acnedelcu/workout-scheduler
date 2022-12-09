using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkoutScheduler.Migrations
{
    public partial class AddSetsToExercise : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sets",
                table: "Details");

            migrationBuilder.AddColumn<int>(
                name: "Sets",
                table: "Exercises",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sets",
                table: "Exercises");

            migrationBuilder.AddColumn<int>(
                name: "Sets",
                table: "Details",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
