import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmmService } from '../smm.service';
import { displayScores, getUserWithNtnet, checklistdata } from '../smm-datastructure';


declare const getntNet: any;
var ntnetvalue: string;
@Component({
  selector: 'app-checklistquestionanswer',
  templateUrl: './checklistquestionanswer.component.html',
  styleUrls: ['./checklistquestionanswer.component.css']
})
export class ChecklistquestionanswerComponent implements OnInit {
  ntnetAttributes: getUserWithNtnet;
  @Input() header:string;
  ntnetname: any;
  constructor(private router: Router,public _smmservice : SmmService) {
  }
 ngOnInit() {
   ntnetvalue=getntNet();
   this._smmservice.getUserWithNtnet(ntnetvalue).subscribe(data => {
     this.ntnetAttributes = data;
     this.ntnetname = this.ntnetAttributes.name;
   });
  }
}