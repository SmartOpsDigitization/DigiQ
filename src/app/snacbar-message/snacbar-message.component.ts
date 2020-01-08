import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snacbar-message',
  templateUrl: './snacbar-message.component.html',
  styleUrls: ['./snacbar-message.component.css']
})
export class SnacbarMessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: string) { }

  ngOnInit() {
  }

}
