import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  Input, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SmmService } from '../smm.service'
import {checklistdata,question,questionadd,deletequestionid,answer} from '../smm-datastructure'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({
    
    //,'responseType':'Blob',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' :'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT,OPTIONS',
    'changeOrigin': 'true',
    'Content-Type':'application/json',
    responseType:'blob'
  })
};

@Component({
  selector: 'app-checklistquestioanswer',
  templateUrl: './checklistquestioanswer.component.html',
  styleUrls: ['./checklistquestioanswer.component.css']
})

export class ChecklistquestioanswerComponent implements OnInit {
  
  
  processid:number;
  popup:boolean=false;
  popup1:boolean=false;
  confirmdelete:boolean=false;
  checklistpopup:boolean=false;
  checklistname:string;
  updatepopup:boolean=false;
  questionFileMap: Array<{ fileData?: any }> = [];
  checkid:number;
  questionobj = new question();
  answerobj = new answer();
  checklistdataarray:checklistdata[];
  checkobj = new checklistdata();
  questionupdate:string;
  questionadd:question[]=[];
  answeradd:any=[];
  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
  score1:number;
  score2:number;
  score3:number;
  score4:number;
  length:number;
  //flag:boolean=false;
  selectedfileque1: File = null;
  header: string = "Checklist";
  selectedQuestionToEdit: question;

  updateans:answer[]=[];
  updatequeid:number;
  updateque:string;

  questionaddobj = new questionadd();
  //deletequesobj = new deletequestionid();
  deletequeid:number;
  ngmodelquestion:string;



  constructor(private router: ActivatedRoute, private http: HttpClient, public _smmservice : SmmService,public _snackBar: MatSnackBar) { }



  ngOnInit() {
    this.processid  = +this.router.snapshot.params['id'];
    this.checkid = +this.router.snapshot.params['chkid'];
    console.log(this.checkid);
    // this._smmservice.getcheckedlistbasedonprocess(this.checkid).subscribe(data =>this.checklistdataarray = data) 
    //hm879b
    this._smmservice.getcheckedlistbasedonprocess(this.checkid).subscribe(data =>
      {
        this.checklistdataarray = data;
      }) 
 
  }
  
  openpopup(){
    this.popup=true;
    
  }
  openpopup1(){
    this.popup1=true;
  }

  onsavenewquestion(){
    this.questionobj.checklistid=this.checkid;
    this.questionobj.question=this.ngmodelquestion;

  }
  onaddque(){
    this.questionaddobj.checklistId=this.checkid ;
  
    this.questionaddobj.question=this.questionupdate; 
    // this.answerobj.answer = this.answer1;
    // this.answerobj.score=this.score1;
    // this.answeradd.push(this.answerobj);
    this.answeradd.push({answer: this.answer1, score: this.score1});
    this.answeradd.push({answer: this.answer2, score: this.score2});
    this.answeradd.push({answer: this.answer3, score: this.score3});
    this.answeradd.push({answer: this.answer4, score: this.score4});
    // this.answerobj.answer = this.answer2;
    // this.answerobj.score=this.score2;
    // this.answeradd.push(this.answerobj);
    // this.answerobj.answer = this.answer3;
    // this.answerobj.score=this.score3;
    // this.answeradd.push(this.answerobj);
    // this.answerobj.answer = this.answer4;
    // this.answerobj.score=this.score4;
    // this.answeradd.push(this.answerobj);
    this.questionaddobj.answer=this.answeradd;
    this._smmservice.savequestionanswer(this.questionaddobj);
   console.log(this.questionaddobj);
    location.reload();
    // this._snackBar.open("Question Added Succesfully")._dismissAfter(5000)   
  }

 
  closepopup(){
    this.popup=false;
    this.popup1=false;
  }
  closepopup1(){
    this.popup=false;
    this.popup1=false;
  }
  openchecklistpopup(){
    this.checklistpopup=true;
  }

 

  // onselectupdate(updatequeidvar,updatequevar,updateansvar)
  // {
  //   this.updatequeid=updatequeidvar;

  //   this.updateque=updatequevar;
  //   this.updateans=updateansvar;
  //   this.updatepopup=true;

  //   this.questionupdate=this.updateque;
  //   this.answer1=this.updateans[0].answer;
  //   this.answer2=this.updateans[1].answer;
  //   this.answer3=this.updateans[2].answer;
  //   this.answer4=this.updateans[3].answer;

  //   this.score1=this.updateans[0].score;
  //   this.score2=this.updateans[1].score;
  //   this.score3=this.updateans[2].score;
  //   this.score4=this.updateans[3].score;

  // }



  onselectupdate(updatequevar)
  {
    this.selectedQuestionToEdit = updatequevar;

    console.log(updatequevar);
    this.updatequeid=updatequevar.questionId;
    
    this.updateque=updatequevar.question;
     this.updateans=updatequevar.answer;
     console.log( this.updateans);
    this.updatepopup=true;

    this.questionupdate=this.updateque;
    this.answer1=this.updateans[0].answer;
    this.answer2=this.updateans[1].answer;
    this.answer3=this.updateans[2].answer;
    this.answer4=this.updateans[3].answer;

    this.score1=this.updateans[0].score;
    this.score2=this.updateans[1].score;
    this.score3=this.updateans[2].score;
    this.score4=this.updateans[3].score;

  }
  onupdateque(){
    // debugger;
    this.questionaddobj.questionId=this.updatequeid;
    this.questionaddobj.checklistId=this.checkid ;
     this.questionaddobj.question=this.selectedQuestionToEdit.question; 
    // this.answeradd.push({answerId:this.updateans[0].answerId,answer: this.answer1, score: this.score1});
    // this.answeradd.push({answerId:this.updateans[1].answerId,answer: this.answer2, score: this.score2});
    // //if(this.answer3.trim() != ""){
    // this.answeradd.push({answerId:this.updateans[2].answerId,answer: this.answer3, score: this.score3});
    // //}
    // //if(this.answer4.trim() != ""){
      
    //   this.answeradd.push({answerId:this.updateans[3].answerId,answer: this.answer4, score: this.score4});
    // //}
    this.questionaddobj.answer=this.selectedQuestionToEdit.answer;
    this._smmservice.updatequestionanswer(this.questionaddobj);
   
    location.reload();
    this._snackBar.open("Question Updated Succesfully")._dismissAfter(5000)  
  }

  closeupdatepopup()
  {
    this.updatepopup=false;
  }

  deletepopup(quesid){
    this.confirmdelete=true;
    // debugger
    //this.deletequesobj.questionid=quesid
    this.deletequeid=quesid;
    //this._smmservice.deletequestionanswer(this.deletequesobj);
    
  }

  onselectdelete()
  {
    this._snackBar.open("Question Deleted Succesfully")._dismissAfter(5000) 
    this._smmservice.deletequestionanswer(this.deletequeid);
    location.reload();
  }
  // uploadFile(file) {
  //   var formData = new FormData();
  //   // this.selectedfileque1 = <File>event;
  //   debugger
  //   formData.append('fileupload',file);
  //   console.log('file',file)
 
  //   this.http.post('http://jadhavk01:8082/api/reportms/uploadFile',formData)
  //   .subscribe((response) => {
  //     console.log('response', response)
  //   },
  //     (error) => {
  //       console.log('error in fileupload', error)
  //     });
  //   }

    download() {


      //this.http.get('http://nitind03:8082/api/reportms/download/windows-version.txt')
     this.http.get('http://nitind03:8082/api/reportms/download/Template.xlsx',httpOptions)
      .subscribe((response) => {
        console.log('response', response)
      },
        (error) => {
          console.log('error in file download', error)
        });
      }



      uploadFile(file) {
        this.questionFileMap.push({
          fileData: file[0],
          });
      }


      onsubmit() {
        location.reload();
        //  debugger
        for (let i = 0; i < this.questionFileMap.length; i++) {
           const chkid = this.router.snapshot.params['chkid'];
            console.log('ckhid' ,chkid);
    
          console.log('this.questionFileMap',this.questionFileMap)
          var formData = new FormData();
          formData.append('file', this.questionFileMap[i].fileData);
          
          formData.append('checklistId', chkid)

          this.http.post('http://nitind03:8082/api/reportms/uploadFile', formData)
        .subscribe((response) => {
          console.log('response', response)
        },
          (error) => {
            console.log('error in fileupload', error)
          });
          //this.router.navigateByUrl('/')
    }
  }

    
}


