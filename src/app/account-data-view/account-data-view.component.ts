import { Component, OnInit } from '@angular/core';
import { AccountDashboardData, Snapshot, Path, EventEmitted } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-data-view',
  templateUrl: './account-data-view.component.html',
  styleUrls: ['./account-data-view.component.css']
})
export class AccountDataViewComponent implements OnInit {

  public dashboardType:string="Account";
  public selectedAccount:AccountDashboardData;
  public selectedAccountName:string;
  //public selectedAccountSnapshotIndex:number;
  public snapshotToBeDisplayed:Snapshot;
  public displayDashboardTable:boolean=false;
  public incomingAccountName:string;
  public incomingAccountIndex:number=-1;
  public accountNamesLoaded:boolean=false;
  public incomingAccountIndexLoaded:boolean=false;
  public incomingLineName:string;
  public accountNames:string[];
  public paths:Path[]=[];
  public notFound:boolean=false;
  public displayLoader:boolean=false;
  constructor(private _dashboardService:DashboardService,private router:Router,private route:ActivatedRoute) { 
    

  }

  setLatestAcccountDashboardTable(event:EventEmitted)
  {
    this.displayDashboardTable=false;
    this.selectedAccountName=event.name;
    if(this.paths[this.paths.length-1].name=="ACCOUNT VIEW")
    {
      this.paths.push(new Path(this.selectedAccountName,this.paths[this.paths.length-1].link+"/"+this.selectedAccountName));
    }
    else
    {
      let x:Path=this.paths.pop();
      x.name=this.selectedAccountName;
      if(this.paths[this.paths.length-1].name=="ACCOUNT VIEW")
      {
        x.link=this.paths[this.paths.length-1].link+"/"+x.name;
      }
      else
      {
        x.link=this.paths[this.paths.length-1].link+"/account/"+x.name;
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
  setDashboardTable(event:EventEmitted)
  {
    this.displayDashboardTable = false;
    this.snapshotToBeDisplayed = event.snapshot;
    if(this.snapshotToBeDisplayed)
    {
      this.displayDashboardTable = true;
    }
    this.stopLoader();
  }

  ngOnInit() {
        this.route.params.subscribe(params => { this.incomingAccountName = params['accountName']; });
        var pathData=this.router.url.split("/");
        this.paths=[new Path(pathData[1].toUpperCase()+" VIEW","/"+pathData[1])];
        let x:string="";
        let k:number=1;

        if(pathData.length==3&&pathData[1]=="adm")
        {
          x=x+"/"+pathData[1]+"/"+pathData[2];
          this.paths.push(new Path(pathData[2].toUpperCase()+" VIEW",x));
        }
        else
        {
          if(pathData[1]=="adm")
          {
            k=2;
            x="/"+pathData[1];
          }
          for(let i=k;i<pathData.length-1;i+=2)
          {
              x=x+"/"+pathData[i]+"/"+pathData[i+1];
              this.paths.push(new Path(pathData[i+1],x));
          }
        }
        /*********************************************/
        this._dashboardService.getAllAccountNames()
        .then(data=>{
          this.accountNames=data;
          if(this.incomingAccountName)
          {
            this.incomingAccountIndex = this.accountNames.findIndex(item => item === this.incomingAccountName);
          }
          else
          {
            this.incomingAccountIndex=-1;
          }
        });
        this.incomingAccountIndexLoaded=true;
        this.accountNamesLoaded=true;

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