import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopUpComponent } from './pop-up/pop-up.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data:{
        responseMessage:this.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
