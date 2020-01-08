import { Component, OnInit, Input } from '@angular/core';
import { Snapshot, Row, RowCellData } from '../DataStructures';

@Component({
  selector: 'app-adm-dashboard-table',
  templateUrl: './adm-dashboard-table.component.html',
  styleUrls: ['./adm-dashboard-table.component.css']
})
export class AdmDashboardTableComponent implements OnInit {

  @Input() data:Snapshot;
  public dashboardType:string="ADM";
  @Input() currentUrl:string;
  public columnNames:string[];
  public rows:Row[];
  public showScore:boolean[][]=[];
  public display:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  displayScore(i:number,j:number)
  {
    this.showScore[i][j]=true;
  }
  hideScore(i:number,j:number)
  {
    this.showScore[i][j]=false;
  }
  ngOnChanges()
  {
    this.columnNames=this.data.columnNames;
    this.rows=this.data.rows;
    for(var i=0;i<this.rows.length;i++)
      {
        this.showScore[i]=[]
        for(var j=0;j<this.columnNames.length;j++)
          {
              this.showScore[i][j]=false;
          }
      }
  }
  getStyle(cell:RowCellData)
  {
    var style;
    if(cell.color=="amdocs")
    {
      style = {'background' : 'url(/assets/Images/amdocs_color.png)','background-repeat' : 'no-repeat', 'background-size':'cover','background-position': 'center'};
    }
    else
    {
      style={'background-color': cell.color };
    }
    return style;
  }
  getTeamLink(location:string)
  {
    let link:string=this.currentUrl;
    link=link+"/team/";
    link=link+location;
    return link;
  }
  getLink(location:string,type:string)
  {
    if(type=="team")
    {
      return this.getTeamLink(location);
    }
    else if(type=="account")
    {
      return this.currentUrl+"/account/"+location;
    }
    else if(type=="line")
    {
      return this.currentUrl+"/line/"+location;
    }
    else if(type=="score")
    {
      return this.getTeamLink(location);
    }
  }
  getHyperLink(rowName:string,cellData:string,position:number)
  {
    let link:string;
    if(this.columnNames[position]=="Account Name")
    {
      link=this.getLink(cellData,"account");
    }
    else if(this.columnNames[position]=="Line Name")
    {
      link=this.getLink(cellData,"line");
    }
    else if(this.columnNames[position]=="Total Score")
    {
      link=this.getLink(rowName,"score");
    }
    return link;
  }
  isHyperLink(position:number)
  {
    if(this.columnNames[position]=="Account Name"||this.columnNames[position]=="Line Name"||this.columnNames[position]=="Total Score")
    {
      return true;
      
    }
    else
    {
      return false;
    }
  }

}
