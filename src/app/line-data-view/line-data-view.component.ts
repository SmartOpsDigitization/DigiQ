import { Component, OnInit } from '@angular/core';
import { LineDashboardData, Snapshot, Path, EventEmitted } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-line-data-view',
  templateUrl: './line-data-view.component.html',
  styleUrls: ['./line-data-view.component.css']
})
export class LineDataViewComponent implements OnInit {

  public dashboardType: string = "Line";
  public lines: LineDashboardData[];
  public selectedLine: LineDashboardData;
  public selectedLineIndex: number;
  public selectedLineSnapshotIndex: number;
  public snapshotToBeDisplayed: Snapshot;
  public displayDashboardTable: boolean = false;
  public incomingLineName: string;
  public incomingLineIndex: number;
  public lineNamesLoaded: boolean = false;
  public incomingLineIndexLoaded: boolean = false;
  public paths: Path[] = [];
  public lineNames: string[];
  public selectedLineName:string;
  public notFound:boolean=false;
  public displayLoader:boolean=false;
  constructor(private _dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) {


    this.incomingLineIndexLoaded=false;
    this.lineNamesLoaded=false;
    this.displayDashboardTable=false;
  }

  setLatestLineDashboardTable(event: EventEmitted) {
    this.displayDashboardTable = false;
    this.selectedLineName=event.name;
    /*Code for updating the path bar*/
    if (this.paths[this.paths.length - 1].name == "LINE VIEW") {
      this.paths.push(new Path(this.selectedLineName, this.paths[this.paths.length - 1].link + "/" + this.selectedLineName));
    }
    else {
      let x: Path = this.paths.pop();
      x.name = this.selectedLineName;
      if (this.paths[this.paths.length - 1].name == "LINE VIEW") {
        x.link = this.paths[this.paths.length - 1].link + "/" + x.name;
      }
      else {
        x.link = this.paths[this.paths.length - 1].link + "/line/" + x.name;
      }
      this.paths.push(x);
    }
    /**************************************/
    this.snapshotToBeDisplayed = event.snapshot;
    if(this.snapshotToBeDisplayed)
    {
      this.displayDashboardTable = true;
    }
    this.stopLoader();
    this.notFound=true;
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
  ngOnInit() {

    /********************code for receiving path parameters and updating path bar*************************************/
    this.route.params.subscribe(params => { this.incomingLineName = params['lineName']; });
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
    /*********************************************************************************************************** */
    this._dashboardService.getAllLineNames()
      .then(data => {
        this.lineNames = data;
        if (this.incomingLineName) {
          this.incomingLineIndex = this.lineNames.findIndex(item => item === this.incomingLineName);
        }
        else {
          this.incomingLineIndex = -1;
        }
        this.incomingLineIndexLoaded = true;
        this.lineNamesLoaded = true;
      });
  }
}