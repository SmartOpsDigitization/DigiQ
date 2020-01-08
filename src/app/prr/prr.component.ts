import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SmmService } from '../smm.service';
import { checklistdata, submitQueAns, getUserWithNtnet, questionFileMap } from '../smm-datastructure';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';
declare const getntNet: any;
var ntnetvalue: string;
@Component({
  selector: 'app-prr',
  templateUrl: './prr.component.html',
  styleUrls: ['./prr.component.css']
})
export class PrrComponent implements OnInit {
  public que1: number = 0;
  public displaydataque1: boolean = true;
  checklistdataarray: checklistdata[] = [];
  checklistdataobject = new checklistdata();
  public databinding: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  accountIdvar: number;
  ntnetAttributes: getUserWithNtnet;
  submitobject: submitQueAns;
  submitobject1: submitQueAns[] = [];
  arrQuestionFileMap: questionFileMap[] = [];
  selectedanswer: submitQueAns;
  selectedfileque1: File = null;
  httpService: any;
  constructor(private _formBuilder: FormBuilder, private http: HttpClient, public _smmservice: SmmService, private router: Router) { }
  selectedAnswerId: string;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    ntnetvalue = getntNet();
    this._smmservice.getUserWithNtnet(ntnetvalue).subscribe(data => {
      this.ntnetAttributes = data;
    });
    this._smmservice.getcheckedlistusingntnet(ntnetvalue).subscribe(data => {
      this.checklistdataarray = data
    });
  }
  checkvalue() {
    if (+this.que1 == 0) {
      this.displaydataque1 = false;
    } else {
      this.displaydataque1 = true;
    }
  }
  onSelect(checklistData, questionData, unique: string, x : string) {
    const selectedAnswer = questionData.answer.find((i) => i.answerId == questionData.selectedAnswerId);
    if (selectedAnswer == undefined) {
      this.onSelectModify(checklistData.accountTeamMappingId, questionData.questionId, 0, 0, 'null', unique + "" + x);
    } else {
      this.onSelectModify(checklistData.accountTeamMappingId, questionData.questionId, selectedAnswer.answerId, selectedAnswer.score, 'null', unique + "" + x);
    }
  }
  onSelectModify(accTeamMappingIdVar: number, queIdVar: number, ansIdVar: number, scoreVar: number, docPathVar: string, index : string) {
    var tempobj: submitQueAns = {
      accountTeamMappingId: accTeamMappingIdVar,
      questionId: queIdVar,
      answerId: ansIdVar,
      score: scoreVar,
      documentPath: docPathVar,
      countFlag:0
    };
    this.submitobject = tempobj;
    var findObj = this.arrQuestionFileMap.find(element => element.uniqueIndex == index);
    if(isNullOrUndefined(findObj)){
      var tempQFData : questionFileMap = {
        uniqueIndex: index,
        questionData: this.submitobject,
        fileData : null
      };
      this.arrQuestionFileMap.push(tempQFData);
    }  else {
      findObj.questionData = this.submitobject;
    }
    this.submitobject1.push(tempobj);
  }
  onsubmit() {
    if (this.arrQuestionFileMap.length == 0) {
      this._smmservice.submitquestionanswer(this.submitobject1);
    } else {
      for (let i = 0; i < this.arrQuestionFileMap.length; i++) {
        var formData = new FormData();
        this.arrQuestionFileMap[i].questionData.countFlag=i 
        formData.append('file', this.arrQuestionFileMap[i].fileData);
        formData.append('jsonChecklist', JSON.stringify(this.arrQuestionFileMap[i].questionData));
        this.http.post('http://nitind03:8082/api/reportms/saveUpdateChecklistResponseWithFile', formData)
          .subscribe((response) => { }, (error) => {
          });
      }
    }
    swal('Checklist submitted Succesfully').then(() => {
      this.router.navigateByUrl('/')
    });
  }
  uploadFile(file, unique: string, x : string) {
    let index = unique + "" + x;   
    var findObj = this.arrQuestionFileMap.find(element => element.uniqueIndex == index);
    if(isNullOrUndefined(findObj)){
      var tempQFData : questionFileMap = {
        uniqueIndex: index,
        questionData: null,
        fileData : file[0]
      };
      this.arrQuestionFileMap.push(tempQFData);
    }  else {
      findObj.fileData = file[0];
    }
  }
}