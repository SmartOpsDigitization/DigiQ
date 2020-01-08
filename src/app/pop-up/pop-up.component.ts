import { Component, OnInit, Input,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ResponseMessage } from '../DataStructures';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
 @Input() message:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ResponseMessage) { }
  ngOnInit() {
  }
  

}
