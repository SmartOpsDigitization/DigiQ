import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pillar,Report,Level } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SnacbarMessageComponent } from '../snacbar-message/snacbar-message.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-update-delete-pillar',
  templateUrl: './add-update-delete-pillar.component.html',
  styleUrls: ['./add-update-delete-pillar.component.css']
})
export class AddUpdateDeletePillarComponent implements OnInit {

   constructor(public snackBar: MatSnackBar,public dialog: MatDialog, private _dashboardService: DashboardService, private router:Router) {   this.pillarNameDisabled = false; }

  public pillars: Pillar[];
  public reports: Report[];
  public levels: Level[];
  public form_pillarName: string;
  public form_pillarId: string;
  public form_reportId: string;
  public form_pillarDetails: string;
  public pillar: Pillar = new Pillar();
  public level: Level = new Level();  
  public report: Report = new Report(); 
  public formButtonName: string = "Add Category"; 
  public pillarNameDisabled: boolean = false;
  public selectedPillarIndex: number = -1;
  public selectedReport;

  
    onSubmit() {  
                if (this.formButtonName == "Add Category") {
                    this.addCategory();
                }
                else {
                    this.updateCategory();
                }
             }
   addCategory() {
        if (this.validatePillar() == true) {
            this.pillar.pillarId = 0;
            this.pillar.reportId=this.selectedReport;
            this._dashboardService.addCategory(this.pillar).then(data => {
                this.openSnackBar(data.responseMessage); 
            }).then((result) => {
                window.location.reload();
              });

        }
        else {
            this.openSnackBar("Fill all the details")
        }
    }
    
    public launchKPI()
    {
       this.router.navigateByUrl('/admin/kpi'); 
    }
    
    updateCategory() {
        this.pillar.pillarId= this.pillars[this.selectedPillarIndex].pillarId;
        if (this.selectedPillarIndex != -1) {
            if (this.validatePillar()) {
                this._dashboardService.updateCategory(this.pillar).then(data => {
                    this.openSnackBar(data.responseMessage); 
                }).then((result) => {
                  });

            }
            else {
                this.openSnackBar("Fill All the details")
            }
        }
    }


	 OnModifyCategory() {
        if (this.selectedPillarIndex != -1) {
            this.pillarNameDisabled = true;
            this.formButtonName = "Update Category";
            let categoryToBeModified: Pillar = this.pillars[this.selectedPillarIndex];
            this.pillar.setProperties(categoryToBeModified);
        }
        else {
            this.openSnackBar("Select A Category First");
        }
    }
    
    OnDeleteCategory(){
        if (this.selectedPillarIndex != -1) { 
            const dialogRef = this.dialog.open(PopUpComponent, {
                data: {
                    responseMessage: "Do you want to delete Category ?"
                }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this._dashboardService.deletePillar(this.pillars[this.selectedPillarIndex].pillarId).then(data => {
                        this.openSnackBar(data.responseMessage);
                        this._dashboardService.getAllPillarDetails().then(pillars => {
                            this.pillars = pillars;
                            this.selectedPillarIndex = -1;
                            this.onReset();
                        });
                    });
                }
            });



        }
        else {
            this.openSnackBar("Select A Category First");
        }
    } 

     public onReset() {
        this.pillar.resetProperties();
        this.pillarNameDisabled = false;
        this.formButtonName = "Add Pillar";
    }
     
     validatePillar() {

        if (
            (this.pillar.pillarName == "")) {
            return false;
        }
        else {

            return true;
        }
    }
     
     openSnackBar(message: string ) {
        this.snackBar.openFromComponent(SnacbarMessageComponent, {
            data: message,
            duration: 3000,
            verticalPosition: "top",
            horizontalPosition: "center",
            direction: "ltr",
            panelClass: ['snackbar-class']
        });
    }
     
   onSelectionIndex(value) {
        this.selectedPillarIndex = value;
    }  
  ngOnInit() {
      this.pillar.resetProperties();
        this._dashboardService.getAllPillarDetails().then(data => {
            this.pillars = data;
        })
		this._dashboardService.getAllReports().then(data => {
            this.reports = data;
        })
		this._dashboardService.getAllLevels().then(data => {
            this.levels = data;
        })
		
  }

}
