import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmmService } from '../smm.service';
import { displayScores, getUserWithNtnet, checklistdata } from '../smm-datastructure'
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ConfigService } from '../config.service';
// declare const getntNet: any;
// var ntnetvalue: string;
@Component({
  selector: 'app-home-ssm-auqa',
  templateUrl: './home-ssm-auqa.component.html',
  styleUrls: ['./home-ssm-auqa.component.css']
})
export class HomeSsmAuqaComponent implements OnInit {
  // ntnetAttributes: getUserWithNtnet;
  // public buttonvar: boolean = false;
  // public buttonvar1: boolean = true;
  // checklistdataarray: checklistdata[];
  constructor(private router: Router, public _smmservice: SmmService, public _snackBar: MatSnackBar) {
  }
  ngOnInit() {
  //   ntnetvalue = getntNet();
  //   this._smmservice.getUserWithNtnet(ntnetvalue).subscribe(data => {
  //     this.ntnetAttributes = data;
  //     this._snackBar.open("Hello  --  " + this.ntnetAttributes.name)._dismissAfter(5000);
  //     if (checkContent(this.ntnetAttributes)) {
  //       this.buttonvar = true;
  //       this.loadchecklistwithntnet();
  //     }
  //   });
  //   function checkContent(content: getUserWithNtnet): boolean {
  //     if (content.role === "SPOC") {
  //       return true;
  //     }
  //     else {
  //       return false;
  //     }
  //   }
  }
  // redirectAdmin() {
  //   this.router.navigateByUrl('/admin');
  // }
  // redirectsuperadmin() {
  //   this.router.navigateByUrl('/superadmin');
  // }
  // loadchecklistwithntnet() {
  //   this._smmservice.getChecklistBySPOCNtnet(ntnetvalue).subscribe((data) => {
  //     this.checklistdataarray = data;
  //   });
  // }
}