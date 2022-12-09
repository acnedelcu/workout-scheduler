using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkoutScheduler.Migrations
{
    public partial class RemoveDetailsFromSchedule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Details_Schedules_ScheduleId",
                table: "Details");

            migrationBuilder.DropIndex(
                name: "IX_Details_ScheduleId",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "ScheduleId",
                table: "Details");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ScheduleId",
                table: "Details",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Details_ScheduleId",
                table: "Details",
                column: "ScheduleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Details_Schedules_ScheduleId",
                table: "Details",
                column: "ScheduleId",
                principalTable: "Schedules",
                principalColumn: "Id");
        }
    }
}
