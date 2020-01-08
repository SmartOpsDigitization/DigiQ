import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDataViewComponent } from './account-data-view/account-data-view.component';
import { AddUpdateDeleteAccountComponent } from './add-update-delete-account/add-update-delete-account.component';
import { AddUpdateDeleteKpiComponent } from './add-update-delete-kpi/add-update-delete-kpi.component';
import { AddUpdateDeleteLineComponent } from './add-update-delete-line/add-update-delete-line.component';
import { AddUpdateDeletePillarComponent } from './add-update-delete-pillar/add-update-delete-pillar.component';
import { AddUpdateDeleteTeamComponent } from './add-update-delete-team/add-update-delete-team.component';
import { AddUpdateDeleteTeamPage2Component } from './add-update-delete-team-page2/add-update-delete-team-page2.component';
import { AdmDataViewComponent } from './adm-data-view/adm-data-view.component';
import { AdminComponent } from './admin/admin.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ConfigTeamComponent } from './config-team/config-team.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HomeComponent } from './home/home.component';
import { HomeSsmAuqaComponent } from './home-ssm-auqa/home-ssm-auqa.component';
import { LineDataViewComponent } from './line-data-view/line-data-view.component';
import { ProcessComponent } from './process/process.component';
import { ProcessteammapComponent } from './processteammap/processteammap.component';
import { PrrComponent } from './prr/prr.component';
import { QereviewComponent } from './qereview/qereview.component';
import { QuestionComponent } from './question/question.component';
import { SmmDataComponent } from './smm-data/smm-data.component';
import { SmmProcessSelectionComponent } from './smm-process-selection/smm-process-selection.component';
import { SsmComponent } from './ssm/ssm.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { TeamComponent } from './team/team.component';
import { TeamDataViewComponent } from './team-data-view/team-data-view.component';
import { ChecklistquestioanswerComponent } from './checklistquestioanswer/checklistquestioanswer.component';
import { SubmittedResponsesComponent } from './submitted-responses/submitted-responses.component';
import { ChecklistquestionanswerComponent } from './checklistquestionanswer/checklistquestionanswer.component';
import { SsmhomeComponent } from './ssmhome/ssmhome.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
const routes: Routes = [
  { path: 'test', component: HomeSsmAuqaComponent },
  { path: '', component: SsmhomeComponent },
  { path: 'team', component: TeamDataViewComponent },
  { path: 'account', component: AccountDataViewComponent },
  { path: 'line', component: LineDataViewComponent },
  { path: 'adm', component: AdmDataViewComponent },
  { path: 'team/:teamName', component: TeamDataViewComponent },
  { path: 'account/:accountName/team/:teamName', component: TeamDataViewComponent },
  { path: 'line/:lineName/team/:teamName', component: TeamDataViewComponent },
  { path: 'line/:lineName/account/:accountName/team/:teamName', component: TeamDataViewComponent },
  { path: 'adm/team/:teamName', component: TeamDataViewComponent },
  { path: 'adm/account/:accountName/team/:teamName', component: TeamDataViewComponent },
  { path: 'adm/line/:lineName/account/:accountName/team/:teamName', component: TeamDataViewComponent },
  { path: 'account/:accountName', component: AccountDataViewComponent },
  { path: 'line/:lineName/account/:accountName', component: AccountDataViewComponent },
  { path: 'adm/account/:accountName', component: AccountDataViewComponent },
  { path: 'adm/account', component: AccountDataViewComponent },
  { path: 'adm/line/:lineName/account/:accountName', component: AccountDataViewComponent },
  { path: 'line/:lineName', component: LineDataViewComponent },
  { path: 'adm/line/:lineName', component: LineDataViewComponent },
  { path: 'adm/line', component: LineDataViewComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/line', component: AddUpdateDeleteLineComponent },
  { path: 'admin/account', component: AddUpdateDeleteAccountComponent },
  { path: 'admin/team', component: AddUpdateDeleteTeamComponent },
  { path: 'admin/team2', component: AddUpdateDeleteTeamPage2Component },
  { path: 'admin/config/team/:teamId', component: ConfigTeamComponent },
  { path: 'admin/pillar', component: AddUpdateDeletePillarComponent },
  { path: 'admin/kpi', component: AddUpdateDeleteKpiComponent },
  { path: 'admin/guidelines', component: GuidelinesComponent },
  { path: 'prr', component: PrrComponent },
  { path: 'aqua', component: HomeComponent },
  { path: 'ssm', component: SsmComponent },
  { path: 'ssmdata/:accountId', component: SmmDataComponent },
  { path: 'ssmprocess', component: SmmProcessSelectionComponent },
  { path: 'superadmin', component: SuperadminComponent },
  { path: 'superadmin/process', component: ProcessComponent },
  { path: 'superadmin/team', component: TeamComponent },
  { path: 'superadmin/account', component: QuestionComponent },
  { path: 'superadmin/qereview', component: QereviewComponent },
  { path: 'superadmin/checklist', component: ChecklistComponent },
  { path: 'checklistdata/:id/:chkid', component: ChecklistquestioanswerComponent },
  { path: 'superadmin/processteammap', component: ProcessteammapComponent },
  { path: 'reload', component: SmmProcessSelectionComponent },
  { path: 'ssmdata/:accountId/submittedResponses/:teamId', component: SubmittedResponsesComponent },
  { path: 'test', component: ChecklistquestionanswerComponent },
  { path: 'test1', component: DashboardHeaderComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }