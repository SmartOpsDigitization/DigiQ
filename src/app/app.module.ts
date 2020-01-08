import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountDashboardTableSelectorComponent } from './account-dashboard-table-selector/account-dashboard-table-selector.component';
import { AccountDataViewComponent } from './account-data-view/account-data-view.component';
import { AddUpdateDeleteAccountComponent } from './add-update-delete-account/add-update-delete-account.component';
import { AddUpdateDeleteKpiComponent } from './add-update-delete-kpi/add-update-delete-kpi.component';
import { AddUpdateDeleteLineComponent } from './add-update-delete-line/add-update-delete-line.component';
import { AddUpdateDeletePillarComponent } from './add-update-delete-pillar/add-update-delete-pillar.component';
import { AddUpdateDeleteTeamComponent } from './add-update-delete-team/add-update-delete-team.component';
import { AddUpdateDeleteTeamPage2Component } from './add-update-delete-team-page2/add-update-delete-team-page2.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AdmDashboardTableComponent } from './adm-dashboard-table/adm-dashboard-table.component';
import { AdmDashboardTableSelectorComponent } from './adm-dashboard-table-selector/adm-dashboard-table-selector.component';
import { AdmDataViewComponent } from './adm-data-view/adm-data-view.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistquestionanswerComponent } from './checklistquestionanswer/checklistquestionanswer.component';
import { ConfigTeamComponent } from './config-team/config-team.component';
import { DashBoardTableComponent } from './dash-board-table/dash-board-table.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DataNotFoundComponent } from './data-not-found/data-not-found.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HomeComponent } from './home/home.component';
import { HomeSsmAuqaComponent } from './home-ssm-auqa/home-ssm-auqa.component';
import { KpiPopUpComponent } from './kpi-pop-up/kpi-pop-up.component';
import { LegendComponent } from './legend/legend.component';
import { LegendTeamComponent } from './legend-team/legend-team.component';
import { LineDashboardTableSelectorComponent } from './line-dashboard-table-selector/line-dashboard-table-selector.component';
import { LineDataViewComponent } from './line-data-view/line-data-view.component';
import { LoadingComponent } from './loading/loading.component';
import { PathBarComponent } from './path-bar/path-bar.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ProcessComponent } from './process/process.component';
import { ProcessteammapComponent } from './processteammap/processteammap.component';
import { PrrComponent } from './prr/prr.component';
import { QereviewComponent } from './qereview/qereview.component';
import { QuestionComponent } from './question/question.component';
import { SmmDataComponent } from './smm-data/smm-data.component';
import { SmmProcessSelectionComponent } from './smm-process-selection/smm-process-selection.component';
import { SnacbarMessageComponent } from './snacbar-message/snacbar-message.component';
import { SsmComponent } from './ssm/ssm.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { TeamComponent } from './team/team.component';
import { TeamDashboardTableSelectorComponent } from './team-dashboard-table-selector/team-dashboard-table-selector.component';
import { TeamDataViewComponent } from './team-data-view/team-data-view.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatTooltipModule,MatDialogModule,  MatButtonModule,MatButtonToggleModule, MatSnackBarModule, MatTabsModule,  MatFormFieldModule,MatStepperModule, MatSelectModule} from '@angular/material';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SlideshowModule} from 'ng-simple-slideshow';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChecklistquestioanswerComponent } from './checklistquestioanswer/checklistquestioanswer.component';
import { SubmittedResponsesComponent } from './submitted-responses/submitted-responses.component';
import { SsmhomeComponent } from './ssmhome/ssmhome.component';
import { FooterComponent } from './footer/footer.component';
// import { NotifierModule, NotifierService } from 'angular-notifier';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AccountDashboardTableSelectorComponent,
    AccountDataViewComponent,
    AddUpdateDeleteAccountComponent,
    AddUpdateDeleteKpiComponent,
    AddUpdateDeleteLineComponent,
    AddUpdateDeletePillarComponent,
    AddUpdateDeleteTeamComponent,
    AddUpdateDeleteTeamPage2Component,
    AddquestionComponent,
    AdmDashboardTableComponent,
    AdmDashboardTableSelectorComponent,
    AdmDataViewComponent,
    AdminComponent,
    AdminHeaderComponent,
    ChecklistComponent,
    ChecklistquestionanswerComponent,
    ConfigTeamComponent,
    DashBoardTableComponent,
    DashboardHeaderComponent,
    DataNotFoundComponent,
    GuidelinesComponent,
    HomeComponent,
    HomeSsmAuqaComponent,
    KpiPopUpComponent,
    LegendComponent,
    LegendTeamComponent,
    LineDashboardTableSelectorComponent,
    LineDataViewComponent,
    LoadingComponent,
    PathBarComponent,
    PopUpComponent,
    ProcessComponent,
    ProcessteammapComponent,
    PrrComponent,
    QereviewComponent,
    QuestionComponent,
    SmmDataComponent,
    SmmProcessSelectionComponent,
    SnacbarMessageComponent,
    SsmComponent,
    SuperadminComponent,
    TeamComponent,
    TeamDashboardTableSelectorComponent,
    TeamDataViewComponent,
    ChecklistquestioanswerComponent,
    SubmittedResponsesComponent,
    SsmhomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    SlideshowModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
