import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { NtnetdataService } from '../ntnetdata.service';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { SmmService } from '../smm.service';
import { displayScores, getUserWithNtnet } from '../smm-datastructure'
import { MatSnackBar } from '@angular/material/snack-bar';
declare const getntNet: any;
var ntnetvalue: string;
var authorised = NtnetdataService.authorised1;
@Component({
  selector: 'app-ssm',
  templateUrl: './ssm.component.html',
  styleUrls: ['./ssm.component.css']
})
export class SsmComponent implements OnInit {
  constructor(private router: Router, public _smmservice: SmmService, private _snackBar: MatSnackBar) { }

  header: string = "SMM Dashboard";
  public paths: string = "SSM";
  public buttonvar: boolean = true;
  public buttonvar1: boolean = true;
  accountIdToViewSubmittedResponses: number;
  teamId: number = 1;
  role: string;
  Linechart = [];
  displayScoreArray: displayScores[];
  ntnetAttributes: getUserWithNtnet;
  url: string;
  ngOnInit() {
    this._smmservice.getScoresForAccounts().subscribe(data => {
      this.displayScoreArray = data;
    });
    ntnetvalue = getntNet();
    this._smmservice.getUserWithNtnet(ntnetvalue).subscribe(data => {
      this.ntnetAttributes = data;
      this._snackBar.open("Hello  --  " + this.ntnetAttributes.name)._dismissAfter(5000);
      this.role = checkContent(this.ntnetAttributes);
      if (this.role === "Superadmin") {
        this.buttonvar = false;
      }
      else {
        this.buttonvar1 = false;
      }
    });
    function checkContent(content: getUserWithNtnet): string {
      if (content.role === "SuperAdmin") {
        return "Superadmin";
      }
      else {
        return "aol";
      }
    }
  }
  viewsubmittedresponses(accountId: number) {
    this.accountIdToViewSubmittedResponses = accountId;
    this.router.navigate(['/ssmdata', accountId]);
  }
}