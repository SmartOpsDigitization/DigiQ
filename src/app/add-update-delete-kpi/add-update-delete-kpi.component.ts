import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KPI, Pillar, Level, KpiPillar } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SnacbarMessageComponent } from '../snacbar-message/snacbar-message.component';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
    selector: 'app-add-update-delete-kpi',
    templateUrl: './add-update-delete-kpi.component.html',
    styleUrls: ['./add-update-delete-kpi.component.css']
})
export class AddUpdateDeleteKpiComponent implements OnInit {

    constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private _dashboardService: DashboardService) { this.expressionNameDisabled = false; }

    public pillars: Pillar[];
    public levels: Level[];
    public kpiPillars: KpiPillar[];
    public expressions: KPI[];
    public form_expressionName: string;
    public form_expression: string;
    public form_expressionScore: string;
    public form_expressionKpiDetails: string;
    public pillar: Pillar = new Pillar();
    public kpiPillar: KpiPillar = new KpiPillar();
    public level: Level = new Level();
    public expression: KPI = new KPI();
    public formButtonName: string = "Add KPI";
    public expressionNameDisabled: boolean = false;
    public selectedKpiIndex: number = -1;
    public selectedPillar = 0;
    public selectedLevel = 0;
    public kpiPillarIndex: number = 0;
    onSubmit() {

        if (this.formButtonName == "Add KPI") {
            this.addExpression();
        }
        else {
            this.updateExpression();
        }
    }


    addExpression() {
        if (this.validateExpression() == true) {
            this.kpiPillar.pillarId = this.selectedPillar;
            this.kpiPillar.levelId = this.selectedLevel;
            this.kpiPillar.datasource = "Sonar";
            this.kpiPillar.kpiId = 0;
            this.kpiPillar.kpiExpression = this.expression.kpiExpression;
            this.kpiPillar.score = this.expression.kpiScore;
            this.kpiPillar.kpiDetails = this.expression.kpiDetails;
            this.kpiPillar.kpiName = "KPI_X";

            this._dashboardService.addExpression(this.kpiPillar).then(data => {
                this.openSnackBar(data.responseMessage);
            }).then((result) => {
                window.location.reload();
            });;

        }
        else {
            this.openSnackBar("Fill all the details")
        }
    }

    updateExpression() {
        if (this.validateExpression() == true) {
            let kpiToBeModified: KPI = this.expressions[this.selectedKpiIndex];
            this.kpiPillar.pillarId = this.selectedPillar;
            this.kpiPillar.levelId = this.selectedLevel;
            this.kpiPillar.datasource = "Sonar";
            this.kpiPillar.kpiId = kpiToBeModified.kpiId;
            this.kpiPillar.kpiExpression = this.expression.kpiExpression;
            this.kpiPillar.score = this.expression.kpiScore;
            this.kpiPillar.kpiDetails = this.expression.kpiDetails;
            this.kpiPillar.kpiName = "KPI_X";

            this._dashboardService.updateExpression(this.kpiPillar).then(data => {
                this.openSnackBar(data.responseMessage);
            }).then((result) => {
                window.location.reload();
            });;

        }
        else {
            this.openSnackBar("Fill all the details")
        }
    }

    OnDeleteExpression() {
        if (this.selectedKpiIndex != -1) {
            const dialogRef = this.dialog.open(PopUpComponent, {
                data: {
                    responseMessage: "Do you want to delete Kpi ?"
                }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this._dashboardService.deleteKpi(this.expressions[this.selectedKpiIndex].kpiId).then(data => {
                        this.openSnackBar(data.responseMessage);
                        this._dashboardService.getAllExpressions().then(expressions => {
                            this.expressions = expressions;
                            this.selectedKpiIndex = -1;
                            this.onReset();
                        });
                    });
                }
            });



        }
        else {
            this.openSnackBar("Select A Kpi First");
        }
    }

    OnModifyExpression() {
        if (this.selectedKpiIndex != -1) {
            this.expressionNameDisabled = true;
            this.formButtonName = "Update KPI";
            let categoryToBeModified: KPI = this.expressions[this.selectedKpiIndex];
            this.expression.setProperties(categoryToBeModified);
        }
        else {
            this.openSnackBar("Select A KPI First");
        }
    }

    onChangepillar(pillarSel) {
        console.log(pillarSel);
    }

    onChangeLevel(levelSel) {
        console.log(levelSel);
    }

    validateExpression() {

        if (
            (this.expression.kpiExpression == "")) {
            return false;
        }
        else {

            return true;
        }
    }

    public onReset() {
        this.expression.resetProperties();
        this.expressionNameDisabled = false;
        this.formButtonName = "Add KPI";
    }

    public search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].pillarId == nameKey) {
                return myArray[i];
            }
        }
    }

    openSnackBar(message: string) {
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
        this.selectedKpiIndex = value;
    }

    ngOnInit() {

        this.expression.resetProperties();
        this._dashboardService.getAllExpressions().then(data => {
            this.expressions = data;
        })
        this._dashboardService.getAllPillarDetails().then(data => {
            this.pillars = data;
        })
        this._dashboardService.getAllLevels().then(data => {
            this.levels = data;

        })
    }
}