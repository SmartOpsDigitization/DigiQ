import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SmmService } from '../smm.service';
import { team,viewChecklistResponses, teamsChecklistResponse, questionChecklistResponse } from '../smm-datastructure';
import { DomSanitizer } from '@angular/platform-browser';
import { type } from 'os';

@Component({
  selector: 'app-submitted-responses',
  templateUrl: './submitted-responses.component.html',
  styleUrls: ['./submitted-responses.component.css']
})
export class SubmittedResponsesComponent implements OnInit {

  viewChecklistResponsesObject:viewChecklistResponses;
  accountId:number;
  accountName:string;
  teamsForChecklistResponsesArray:teamsChecklistResponse[];
  teamSelectedToViewResponses:teamsChecklistResponse = {};
  accountIdToViewSubmittedResponses:number;
  teamIdToViewSubmittedResponses:number;
  questionArray:questionChecklistResponse[];
  responseId:number;
  header: string = "Responses";

  constructor(private router: ActivatedRoute,public _smmservice : SmmService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.accountIdToViewSubmittedResponses  = +this.router.snapshot.params['accountId'];
    
    this.accountId  = +this.router.snapshot.params['accountId'];
    this.teamIdToViewSubmittedResponses  = +this.router.snapshot.params['teamId'];
    
    this._smmservice.viewChecklistResponses(this.accountId).subscribe(data => {
      this.viewChecklistResponsesObject = data;
      console.log('DATA: ', this.viewChecklistResponsesObject);
      this.accountName=this.viewChecklistResponsesObject.accountName;
      this.teamsForChecklistResponsesArray=this.viewChecklistResponsesObject.teams;
      console.log('Teams and questions: ', this.teamsForChecklistResponsesArray);
      this.teamSelectedToViewResponses = this.teamsForChecklistResponsesArray.find(i => i.teamId == this.teamIdToViewSubmittedResponses);
      console.log('Teamselected: ', this.teamSelectedToViewResponses);

      this.questionArray=this.teamSelectedToViewResponses.questions
      console.log("questions",this.questionArray);
    });

    
  }

  downloadFile(Id:number){
    
    this.responseId=Id;
    var respfile:File;

    this._smmservice.downloadFileForSubmittedResponses(this.responseId).subscribe(
   
    
 
        // console.log('SUCCESS downloadFile(): ', resp);
        // let blob:any = new Blob([resp], { type: 'text/json; charset=utf-8' });
        // const url= window.URL.createObjectURL(blob);
        // window.open(url);
        // //window.location.href = url;
         
                data => {
                  var binaryData = [];
                  binaryData.push(data);
                  var downloadLink = document.createElement('a');
                  downloadLink.href = window.URL.createObjectURL(new Blob(binaryData));
                  // document.body.appendChild(downloadLink);
          
                  downloadLink.download = downloadLink.href;
                  downloadLink.click();
                  // window.URL.revokeObjectURL(downloadLink.href);
                  },
      // on error
      (err) => {
        
        console.log('ERROR in downloadFile(): ', err);
        
      },
    );
   

  }
  

}
