import { Component, OnInit } from '@angular/core';
import { TeamDashoardData, Release, Snapshot, Path, EventEmitted } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-data-view',
  templateUrl: './team-data-view.component.html',
  styleUrls: ['./team-data-view.component.css']
})
export class TeamDataViewComponent implements OnInit {
  public dashboardType: string = "Team";
  public teams: TeamDashoardData[];
  public teamNames: string[];
  public selectedTeam: TeamDashoardData;
  public selectedTeamName: string;
  public selectedTeamIndex: number;
  public selectedTeamReleaseIndex: number;
  public selectedTeamReleaseSnapshotIndex: number;
  public snapshotToBeDisplayed: Snapshot;
  public displayDashboardTable: boolean=false;
  public incomingTeamName: string;
  public incomingTeamIndex: number;
  public incomingLineName: string;
  public incomingAccountName: string;
  public paths = [];
  public teamNamesLoaded: boolean = false;
  public incomingTeamIndexLoaded: boolean = false;
  public notFound:boolean=false;
  public displayLoader:boolean=false;
  constructor(private _dashboardService: DashboardService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.incomingTeamName = params['teamName'];
      this.incomingAccountName = params['accountName'];
      this.incomingLineName = params['lineName'];
    });
    var pathData = this.router.url.split("/");
    this.paths = [new Path(pathData[1].toUpperCase() + " VIEW", "/" + pathData[1])];
    let x: string = "";
    let k: number = 1;
    if (pathData.length == 3 && pathData[1] == "adm") {
      x = x + "/" + pathData[1] + "/" + pathData[2];
      this.paths.push(new Path(pathData[2].toUpperCase() + " VIEW", x));
    }
    else {
      if (pathData[1] == "adm") {
        k = 2;
        x = "/" + pathData[1];
      }
      for (let i = k; i < pathData.length - 1; i += 2) {
        x = x + "/" + pathData[i] + "/" + pathData[i + 1];
        this.paths.push(new Path(pathData[i + 1], x));
      }
    }
    if (this.incomingTeamName) {
      this._dashboardService.getTeamNamesByFilter(this.incomingLineName, this.incomingAccountName, this.incomingTeamName)
        .subscribe(data => {
          this.teamNames = data;
          this.incomingTeamIndex = this.teamNames.findIndex(item => item == this.incomingTeamName);
          this.displayDashboardTable = false;
          this.incomingTeamIndexLoaded = true;
          this.teamNamesLoaded = true;
        })
    }
    else {
      this.incomingTeamIndex = -1;
      this._dashboardService.getAllTeamNames()
        .subscribe(data => {
          this.teamNames = data;
          this.incomingTeamIndexLoaded = true;
          this.teamNamesLoaded = true;
        });
    }
  }
  setLatestTeamDashboardTable(event: EventEmitted) {
    this.displayDashboardTable = false;
    this.selectedTeamName = event.name;
    if (this.paths[this.paths.length - 1].name == "TEAM VIEW") {
      this.paths.push(new Path(this.selectedTeamName, this.paths[this.paths.length - 1].link + "/" + this.selectedTeamName));
    }
    else {
      let x: Path = this.paths.pop();
      x.name = this.selectedTeamName;
      x.name.replace("%20"," ");
      if (this.paths[this.paths.length - 1].name == "TEAM VIEW") {
        x.link = this.paths[this.paths.length - 1].link + "/" + x.name;
      }
      else {
        x.link = this.paths[this.paths.length - 1].link + "/team/" + x.name;
      }
      this.paths.push(x);
    }
    this.selectedTeamReleaseIndex = 0;
    this.selectedTeamReleaseSnapshotIndex = 0;
    this.snapshotToBeDisplayed = event.snapshot;
    if(this.snapshotToBeDisplayed)
    {
      this.displayDashboardTable = true;
    }
    this.stopLoader();
    this.notFound=true;
  }
  setLatestReleaseDashboardTable(event: EventEmitted) {
    this.displayDashboardTable = false;
    this.snapshotToBeDisplayed = event.snapshot;
    if(this.snapshotToBeDisplayed)
    {
      this.displayDashboardTable = true;
    }
    this.stopLoader();
  }
  setDashboardTable(event: EventEmitted) {
    this.displayDashboardTable = false;
    this.snapshotToBeDisplayed = event.snapshot;
    if(this.snapshotToBeDisplayed)
    {
      this.displayDashboardTable = true;
    }
    this.stopLoader();
  }
  public startLoader()
  {
    this.displayDashboardTable=false;
    this.displayLoader=true;
    this.notFound=false;
  }
  public stopLoader()
  {
    this.displayLoader=false;
    this.notFound=true;
  }
}