import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Snapshot, Row, RowCellData } from '../DataStructures';
import { MatDialog } from '@angular/material';
import { KpiPopUpComponent } from '../kpi-pop-up/kpi-pop-up.component';


@Component({
  selector: 'app-dash-board-table',
  templateUrl: './dash-board-table.component.html',
  styleUrls: ['./dash-board-table.component.css']
})
export class DashBoardTableComponent implements OnInit, OnChanges {
  @Input() data: Snapshot;
  @Input() dashboardType: string;
  @Input() currentUrl: string;
  @Input() runDates: string[] = [];
  public columnName: string[];
  public rows: Row[];
  public showScore: boolean[][] = [];
  public display: boolean = false;
  constructor(public dialog: MatDialog) {


  }
  ngOnInit() {
  }
  displayScore(i: number, j: number) {
    this.showScore[i][j] = true;
  }
  hideScore(i: number, j: number) {
    this.showScore[i][j] = false;
  }
  ngOnChanges() {
    this.columnName = this.data.columnNames;
    this.rows = this.data.rows;
    this.runDates = this.data.runDates;
    for (var i = 0; i < this.rows.length; i++) {
      this.showScore[i] = []
      for (var j = 0; j < this.columnName.length; j++) {
        this.showScore[i][j] = false;
      }
    }
  }
  getStyle(cell: RowCellData) {
    var style;
    if (cell.color == "amdocs") {
      style = { 'background': 'url(/assets/Images/amdocs_color.png)', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center' };
    }
    else {
      style = { 'background-color': cell.color };
    }
    return style;
  }
  getDashboardLink(location: string) {
    let link: string = this.currentUrl;
    if (this.dashboardType == "Account") {
      link = link + "/team/";
    }
    else if (this.dashboardType == "Line") {
      link = link + "/team/";
    }
    link = link + location;
    return link;
  }

  isTeam() {
    if (this.dashboardType == "Team") {
      return true;
    }
    else {
      return false;
    }
  }
  openKpi(columnName: string) {
    const dialogRef = this.dialog.open(KpiPopUpComponent, {
      data: {
        responseMessage: "Do you want to delete Line ?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
