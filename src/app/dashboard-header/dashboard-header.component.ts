import { Component, OnInit, Input } from '@angular/core';
import { SmmService } from '../smm.service';
import { getUserWithNtnet, checklistdata } from '../smm-datastructure';
declare const getntNet: any;
var ntnetvalue: string;
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  ntnetAttributes: getUserWithNtnet;
  @Input() header: string;
  ntnetname: any;
  constructor(public _smmservice: SmmService) { }
  ngOnInit() {
    ntnetvalue = getntNet();
    this._smmservice.getUserWithNtnet(ntnetvalue).subscribe(data => {
      this.ntnetAttributes = data;
      this.ntnetname = this.ntnetAttributes.name;
    });
  }
}