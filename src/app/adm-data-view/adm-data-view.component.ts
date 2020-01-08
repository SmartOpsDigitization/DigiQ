import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Snapshot, Path } from '../DataStructures';

@Component({
  selector: 'app-adm-data-view',
  templateUrl: './adm-data-view.component.html',
  styleUrls: ['./adm-data-view.component.css']
})
export class AdmDataViewComponent implements OnInit {
  public dashboardType:string="ADM";
  public adm:Snapshot[];
  public selectedSnapshotIndex:number;
  public snapshotToBeDisplayed:Snapshot;
  public displayDashboardTable:boolean=false;
  public admLoaded:boolean=false;
  public paths:Path[]=[];
  constructor(private _dashboardService:DashboardService,private router:Router,private route:ActivatedRoute) { 
    
   
  }

  setAdmDashboardTable(event:number)
  {
    this.displayDashboardTable=false;
    this.selectedSnapshotIndex=event;
    this.snapshotToBeDisplayed=this.adm[this.selectedSnapshotIndex];
    this.displayDashboardTable=true;
  }
  ngOnInit() {
  this._dashboardService.getADMData()
    .subscribe(data=>{
      this.adm=data;
      var pathData=this.router.url.split("/");
      this.paths=[new Path(pathData[1].toUpperCase()+" VIEW","/"+pathData[1])];
      this.admLoaded=true;
      this.displayDashboardTable=false;
      this.selectedSnapshotIndex=0;
      this.snapshotToBeDisplayed=this.adm[this.selectedSnapshotIndex];
      this.displayDashboardTable=true;
  })
}

}
