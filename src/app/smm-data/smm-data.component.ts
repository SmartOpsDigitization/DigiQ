import { Component, OnInit } from '@angular/core';
import { NtnetdataService } from '../ntnetdata.service';
import {Router, ActivatedRoute} from '@angular/router';
import { SmmService } from '../smm.service'
import { team,viewChecklistResponses, teamsChecklistResponse, questionChecklistResponse } from '../smm-datastructure';
@Component({
  selector: 'app-smm-data',
  templateUrl: './smm-data.component.html',
  styleUrls: ['./smm-data.component.css']
})
export class SmmDataComponent implements OnInit {
  header:string = 'Submitted Responses'
  viewChecklistResponsesObject:viewChecklistResponses;
  accountId:number=3;
  accountName:string;
  teamsForChecklistResponsesArray:teamsChecklistResponse[];
  accountIdToViewSubmittedResponses:number;
  url:string;
  constructor(private router: ActivatedRoute,public _smmservice : SmmService,private router1: Router) { }
  ngOnInit() {
    this.accountId  = +this.router.snapshot.params['accountId'];
    this._smmservice.viewChecklistResponses(this.accountId).subscribe(data => {
      this.viewChecklistResponsesObject = data;
      this.accountName=this.viewChecklistResponsesObject.accountName;
      this.teamsForChecklistResponsesArray=this.viewChecklistResponsesObject.teams;
    });
    this.accountIdToViewSubmittedResponses  = this.accountId;
  }
  viewsubmittedresponses(teamId:number){
    this.url="/ssmdata/"+this.accountIdToViewSubmittedResponses+"/submittedResponses";
    this.router1.navigate([this.url,teamId]);
  }
}