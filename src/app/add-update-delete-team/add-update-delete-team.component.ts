import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigTeam, Team, TeamDashoardData, Release, Snapshot, Path, EventEmitted, LineDetail, AccountDashboardData, Account, TeamConfigDetails } from '../DataStructures';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { TeamService } from '../team.service';
import { ConfigService } from '../config.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { SnacbarMessageComponent } from '../snacbar-message/snacbar-message.component';
@Component({
  selector: 'app-add-update-delete-team',
  templateUrl: './add-update-delete-team.component.html',
  styleUrls: ['./add-update-delete-team.component.css']
})
export class AddUpdateDeleteTeamComponent implements OnInit {
//   public teams: Team[];
//   public lineNames: string[];
//   public accountNames: string[];
//   public team: Team;
//   public formButton: string = "Add Team"
//   public selectedTeamIndex = -1;
//   public teamNameDisabled = false;
//   public dataSourceAllTeam: TeamConfigDetails[] = [];
  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private _teamService: TeamService, private _configService: ConfigService, private route: ActivatedRoute, private router: Router) {
  }
//   onLineSelect() {
//     this._teamService.getAllAccountNamesForLine(this.team.lineName).then(accountNames => {
//       this.accountNames = accountNames;
//     })
//   }
//   onSelectionIndex(i) {
//     this.selectedTeamIndex = i;
//   }
//   onSubmit() {
//     if (this.formButton == "Add Team") {
//       this.addTeam();
//     }
//     else {
//       this.updateTeam();
//     }
//   }
//   validateTeam() {
//     if ((this.team.teamName == "") || (this.team.teamLeadName == "") || (this.team.lineName == "") || (this.team.accountName == "") ||
//       (!this.team.teamName) || (!this.team.teamLeadName) || (!this.team.lineName) || (!this.team.accountName)) {
//       return false;
//     }
//     return true;
//   }
//   addTeam() {
//     if (this.validateTeam() == true) {
//       this._teamService.addTeam(this.team).then(data => {

//         this._teamService.getAllTeamDetails().then(teams => {
//           this.teams = teams;
//           this.openSnackBar(data.responseMessage);
//           this.getAllDatasourceAllteam();
//           this.redirectToDataConfig();
//         })
//       });
//     }
//     else {
//       this.openSnackBar("Fill all the details");
//     }
//   }
//   redirectToDataConfig() {
//     const dialogRef = this.dialog.open(PopUpComponent, {
//       data: {
//         responseMessage: "Do you want to configure the data source for the team?"
//       }
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         var i;
//         for (i = 0; i < this.teams.length; i++) {
//           if ((this.team.teamName == this.teams[i].teamName) && (this.team.lineName == this.teams[i].lineName) && (this.team.accountName == this.teams[i].accountName)) {
//             this.router.navigateByUrl('/admin/config/team/' + this.teams[i].teamId);
//           }
//         }
//       }
//       this.selectedTeamIndex = -1;
//       this.onReset();
//     });

//   }
//   updateTeam() {

//     if (this.selectedTeamIndex != -1) {
//       if (this.validateTeam()) {
//         this._teamService.updateTeam(this.team).then(data => {
//           this.openSnackBar(data.responseMessage);
//           this._teamService.getAllTeamDetails().then(teams => {
//             this.teams = teams;
//           })
//         });
//         this.formButton = "Add Team";
//         this.onReset();
//         this.selectedTeamIndex = -1;
//       }
//       else {
//         this.openSnackBar("Fill all the Details");
//       }

//     }
//   }
//   modifyTeam() {
//     if (this.selectedTeamIndex != -1) {
//       this.teamNameDisabled = true;
//       this._teamService.getAllAccountNamesForLine(this.teams[this.selectedTeamIndex].lineName).then(data => {

//         this.accountNames = data;
//       })
//       this.team.setProperties(this.teams[this.selectedTeamIndex]);
//       this.formButton = "Update Team"
//     }
//     else {
//       this.openSnackBar("Select Team First");
//     }
//   }
//   deleteTeam() {
//     if (this.selectedTeamIndex != -1) {

//       if (this.dataSourceAllTeam[this.selectedTeamIndex].datasources.length != 0) {
//         this.openSnackBar("Team Cannot be deleted as it is configured with datasources.Please delete datasources first.");
//       }
//       else {
//         /********************************************* */
//         const dialogRef = this.dialog.open(PopUpComponent, {
//           data: {
//             responseMessage: "Are you sure, you want to delete this Team ?"
//           }
//         });
//         dialogRef.afterClosed().subscribe(result => {
//           if (result) {
//             this._teamService.deleteTeam(this.teams[this.selectedTeamIndex].teamName).then(data => {
//               this.openSnackBar(data.responseMessage);
//               this._teamService.getAllTeamDetails().then(lines => {
//                 this.teams = lines;
//                 this.selectedTeamIndex = -1;
//                 this.onResetTeamSelection();
//               });
//             });
//           }
//         });
//       }
//       /*********************************************** */
//     }
//     else {
//       this.openSnackBar("Select Team First")
//     }
//   }
//   onReset() {
//     this.team.resetProperties();
//     this.teamNameDisabled = false;
//   }
//   onResetTeamSelection() {
//     this.selectedTeamIndex = -1;
//     this.formButton = "Add Team";
//     this.onReset();
//   }

//   onTeamConfig() {
//     if (this.selectedTeamIndex != -1) {
//       this.router.navigateByUrl('/admin/config/team/' + this.teams[this.selectedTeamIndex].teamId);
//     }
//     else {
//       this.openSnackBar("Select Team First");
//     }
//   }

//   teamDataSourceAlreadyConfig() {
//   }
//   getAllDatasourceAllteam() {
//     this._configService.getAllDatasourcesAllTeams().then(data => {

//       this.dataSourceAllTeam = data;

//     });
//   }

  ngOnInit() {
//     this.team = new Team();
//     this.team.resetProperties();
//     this._teamService.getAllLineNames().then(data => {
//       this.lineNames = data;
//     });
//     this._teamService.getAllTeamDetails().then(data => {
//       this.teams = data;
//       this.getAllDatasourceAllteam();
//     });
//   }
//   openSnackBar(message: string, ) {
//     this.snackBar.openFromComponent(SnacbarMessageComponent, {
//       data: message,
//       duration: 2000,
//       verticalPosition: "top",
//       horizontalPosition: "center",
//       direction: "ltr",
//       panelClass: ['snackbar-class']
//     });
  }
}