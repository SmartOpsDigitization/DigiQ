import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamDashoardData, Release, Snapshot, Path, EventEmitted, LineDetail, ResponseMessage } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { SnacbarMessageComponent } from '../snacbar-message/snacbar-message.component';

@Component({
  selector: 'app-add-update-delete-line',
  templateUrl: './add-update-delete-line.component.html',
  styleUrls: ['./add-update-delete-line.component.css']
})
export class AddUpdateDeleteLineComponent implements OnInit {





  constructor(public snackBar: MatSnackBar,public dialog: MatDialog, private _dashboardService: DashboardService, private route: ActivatedRoute, private router: Router) {
    this.lineNameDisabled = false;
  }


  public lines: LineDetail[];
  public form_lineName: string;
  public form_lineManagerName: string;
  public form_lineDetail: string;
  public line: LineDetail = new LineDetail("", "", "");
  public selectedLineIndex: number = -1;
  public formButtonName: string = "Add Line";
  public lineNameDisabled: boolean = false;





  onSubmit() {
    if (this.formButtonName == "Add Line") {
      this.addLine();
    }
    else {
      this.updateLine();
    }
  }


  //Modify Line Button click
  OnModifyLine() {
    if (this.selectedLineIndex != -1) {
      this.lineNameDisabled = true;
      this.formButtonName = "Update Line";
      let lineToBeModified: LineDetail = this.lines[this.selectedLineIndex];
      this.line.setProperties(lineToBeModified);
    }
    else {
      this.openSnackBar("Select A Line First");
    }
  }

  addLine() {
    if (this.validateLine() == true) {
      this._dashboardService.addLine(this.line).then(data => {
        this.openSnackBar(data.responseMessage);
        this._dashboardService.getAllLinesDetails().then(lines => {
          this.lines = lines;
          this.onReset();
        })
      });
      
    }
    else {
      this.openSnackBar("Fill all the details")
    }
  }


  validateLine() {

    if (
      (this.line.lineName == "") ||
      (this.line.lineManagerName == "")||!this.line.lineName||!this.line.lineManagerName
    ) {
      return false;
    }
    else {

      return true;
    }
  }



  updateLine() {
    if (this.selectedLineIndex != -1) {
      if (this.validateLine()) {
        this._dashboardService.modifyLine(this.line).then(data => {
          this.openSnackBar(data.responseMessage);
          this._dashboardService.getAllLinesDetails().then(lines => {
            this.lines = lines;
            this.onResetRight();
          })
        });
       
      }
      else {
        this.openSnackBar("Fill All the details")
      }
    }
  }





  OnDeleteLine() {
    if (this.selectedLineIndex != -1) {

      /********************/

      const dialogRef = this.dialog.open(PopUpComponent, {
        data: {
          responseMessage: "Do you want to delete Line ?"
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._dashboardService.deleteLine(this.lines[this.selectedLineIndex].lineName).then(data => {
            this.openSnackBar(data.responseMessage);
            this._dashboardService.getAllLinesDetails().then(lines => {
              this.lines = lines;
              this.selectedLineIndex=-1;
              this.onReset();
            });
          });
        }
      });


      
    }
    else {
      this.openSnackBar("Select A Line First");
    }

  }




  onSelectionIndex(value) {
    this.selectedLineIndex = value;
  }



  public onReset() {
    this.line.resetProperties();
    this.lineNameDisabled = false;
    this.formButtonName = "Add Line";
  }





  onResetRight() {
    this.selectedLineIndex = -1;
    this.onReset();
  }


  openSnackBar(message: string,) {
    this.snackBar.openFromComponent(SnacbarMessageComponent, {
      data: message,
      duration: 2000,
      verticalPosition:"top",
      horizontalPosition:"center",
      direction:"ltr",
      panelClass:['snackbar-class']
    });
  }


  ngOnInit() {
    this.line.resetProperties();
    this._dashboardService.getAllLinesDetails().then(data => {
      this.lines = data;
    })


  }

}
