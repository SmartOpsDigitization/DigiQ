import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigTeam, Pillar, Team, TeamDashoardData, Release, Snapshot, Path, EventEmitted, LineDetail, AccountDashboardData, Account } from '../DataStructures';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { TeamService } from '../team.service';
import { ConfigService } from '../config.service';
import { ZipSubscriber } from 'rxjs/internal/observable/zip';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { SnacbarMessageComponent } from '../snacbar-message/snacbar-message.component';
@Component({
  selector: 'app-config-team',
  templateUrl: './config-team.component.html',
  styleUrls: ['./config-team.component.css']
})
export class ConfigTeamComponent implements OnInit {
  // public lineNames: string[];
  // public accountNames: string[];
  // public teamNames: string[];
  // public pillars: Pillar[];
  // public configTeam: ConfigTeam = new ConfigTeam();
  // public team: Team = new Team();
  // public teamId: number;
  // public teamAllDataSource: ConfigTeam[];
  // public formButtonName: string = "Add Data Source";
  // public selectedDataSourceIndex = -1;
  // public datasourcePresent: boolean = false;
  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private _teamService: TeamService, private _configService: ConfigService, private route: ActivatedRoute, private router: Router) {
  }
  // onSelectionIndex(i) {
  //   this.selectedDataSourceIndex = i;
  // }
  ngOnInit() {
    // this.route.params.subscribe(params => { this.teamId = params['teamId']; });
    // this._teamService.getTeamDetail(this.teamId).then(data => {
    //   this.team = data;

    //   this._configService.getAllConfigDataSourceForTeam(this.teamId).then(data => {
    //     this.teamAllDataSource = data;
    //     if (this.teamAllDataSource.length != 0) {
    //       this.datasourcePresent = true;
    //     }
    //     else {
    //       this.datasourcePresent = false;
    //     }
    //   });
    // });
    // this.configTeam.cron = "* * * * * UTC";
  }
  // onReset() {
  //   this.configTeam.resetProperties();
  // }
  // onSubmit() {
  //   this.configTeam.teamId = this.team.teamId;
  //   this.configTeam.teamName = this.team.teamName;
  //   this.configTeam.pillarId = 1;/**************hard coded */
  //   this.configTeam.cron = "* * * * * UTC";/****hard coded */
  //   if (this.formButtonName == "Add Data Source") {
  //     this.onAdd();
  //   }
  //   else {
  //     this.onUpdate();
  //   }
  // }
  // OnModifyDataSource() {

  //   if (this.selectedDataSourceIndex != -1) {
  //     this.formButtonName = "Update Data Source";
  //     this.configTeam.setProperties(this.teamAllDataSource[this.selectedDataSourceIndex]);
  //   }
  //   else {
  //     this.openSnackBar("Select Data source first");
  //   }
  // }
  // OnDeleteDataSource() {
  //   if (this.selectedDataSourceIndex != -1) {
  //     const dialogRef = this.dialog.open(PopUpComponent, {
  //       data: {
  //         responseMessage: "Are you sure, you want to delete this datasource?"
  //       }
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result) {
  //         let selectedTeam: ConfigTeam = this.teamAllDataSource[this.selectedDataSourceIndex];
  //         this._configService.deleteDataSource(selectedTeam.teamId, selectedTeam.pillarId, selectedTeam.datasource).then(data => {
  //           this.openSnackBar(data.responseMessage)
  //           this._configService.getAllConfigDataSourceForTeam(this.teamId).then(data => {
  //             this.teamAllDataSource = data;
  //             if (this.teamAllDataSource.length != 0) {
  //               this.datasourcePresent = true;
  //             }
  //             else {
  //               this.datasourcePresent = false;
  //             }
  //           })
  //         });
  //         this.onResetRight();
  //       }
  //     });
  //   }
  //   else {
  //     this.openSnackBar("select Data Source first");
  //   }
  // }
  // onAdd() {
  //   if (this.validateinput()) {
  //     this._configService.addDataSource(this.configTeam).then(data => {
  //       this.openSnackBar(data.responseMessage)
  //       this._configService.getAllConfigDataSourceForTeam(this.teamId).then(data => {
  //         this.teamAllDataSource = data;
  //         if (this.teamAllDataSource.length != 0) {
  //           this.datasourcePresent = true;
  //         }
  //         else {
  //           this.datasourcePresent = false;
  //         }
  //         this.onResetRight();
  //       })
  //     });
  //   }
  //   else {
  //     this.openSnackBar("Fill all the details");
  //   }
  // }
  // onUpdate() {
  //   if (this.validateinput()) {
  //     this._configService.updateDataSource(this.configTeam).then(data => {
  //       this.openSnackBar(data.responseMessage)
  //       this._configService.getAllConfigDataSourceForTeam(this.teamId).then(data => {
  //         this.teamAllDataSource = data;
  //         this.onResetRight();
  //         this.selectedDataSourceIndex = -1;
  //       })
  //     });
  //   }
  //   else {
  //     this.openSnackBar("Fill all the details.");
  //   }
  // }
  // validateinput() {
  //   if ((this.configTeam.datasource == "") || (this.configTeam.datasourceUrl == "") || (this.configTeam.userId == "") || (!this.configTeam.userId) ||
  //     (!this.configTeam.datasource) || (!this.configTeam.datasourceUrl)) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }
  // onResetRight() {
  //   this.selectedDataSourceIndex = -1;
  //   this.onReset();
  //   this.formButtonName = "Add Data Source";
  // }
  // openSnackBar(message: string, ) {
  //   this.snackBar.openFromComponent(SnacbarMessageComponent, {
  //     data: message,
  //     duration: 2000,
  //     verticalPosition: "top",
  //     horizontalPosition: "center",
  //     direction: "ltr",
  //     panelClass: ['snackbar-class']
  //   });
  // }
}