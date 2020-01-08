import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { TeamDashoardData, Release, Snapshot, EventEmitted } from '../DataStructures';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-team-dashboard-table-selector',
  templateUrl: './team-dashboard-table-selector.component.html',
  styleUrls: ['./team-dashboard-table-selector.component.css']
})
export class TeamDashboardTableSelectorComponent implements OnInit,OnChanges {
  public productionDate: string;
  public currentPhase: string;
  public dateRefreshedOn: string;
  public isDisabled: boolean = true;
  public selectedTeamIndex: number = -1;
  public selectedReleaseIndex: number = -1;
  public selectedSnapshotIndex: number = -1;
  public selectedTeam: TeamDashoardData = new TeamDashoardData();
  public selectedTeamRelease: Release = new Release();
  public selectedReleaseSnapshot: Snapshot = new Snapshot();
  @Input() teamNames: string[];
  @Input() incomingTeamIndex: number;
  @Output() TeamSelectorEvent: EventEmitter<EventEmitted>;
  @Output() ReleaseSelectorEvent: EventEmitter<EventEmitted>;
  @Output() LoaderEvent:EventEmitter<boolean>;
  @Output() SnapshotSelectorEvent: EventEmitter<EventEmitted>;
  constructor(private _dashboardService: DashboardService) {
    this.TeamSelectorEvent = new EventEmitter<EventEmitted>();
    this.ReleaseSelectorEvent = new EventEmitter<EventEmitted>();
    this.SnapshotSelectorEvent = new EventEmitter<EventEmitted>();
    this.LoaderEvent=new EventEmitter<boolean>();
  }
  getSelectedTeamData() {
    return new Promise<TeamDashoardData>((resolve, reject) => {
      this._dashboardService.getTeamData(this.teamNames[this.selectedTeamIndex])
        .subscribe(data => {
          resolve(data)
        },
          error => {
            reject(error);
          },
      );
    });
  }
  onTeamSelect() {
    this.LoaderEvent.emit(true);
    this.getSelectedTeamData().then(data => {
      this.selectedTeam = data;
      this.selectedTeamRelease = this.selectedTeam.releases[0];
      this.selectedReleaseSnapshot = this.selectedTeamRelease.snapshots[0];
      this.selectedReleaseIndex = 0;
      this.selectedSnapshotIndex = 0;
      if(this.selectedReleaseSnapshot)
      {
        this.productionDate = this.selectedTeamRelease.productionDate;
        this.currentPhase = this.selectedTeamRelease.currentPhase;
        this.dateRefreshedOn = this.selectedReleaseSnapshot.dateRefreshedOn;
        this.isDisabled = false;
      }
      else
      {
        this.isDisabled=true;
      }
      this.TeamSelectorEvent.emit(new EventEmitted(this.teamNames[this.selectedTeamIndex], this.selectedReleaseSnapshot));
    });
  }
  OnReleaseSelect() {
    this.LoaderEvent.emit(true);
    this.selectedTeamRelease = this.selectedTeam.releases[this.selectedReleaseIndex];
    this.selectedReleaseSnapshot = this.selectedTeamRelease.snapshots[0];
    this.selectedSnapshotIndex = 0;
    this.productionDate = this.selectedTeamRelease.productionDate;
    this.currentPhase = this.selectedTeamRelease.currentPhase;
    this.dateRefreshedOn = this.selectedReleaseSnapshot.dateRefreshedOn;
    this.ReleaseSelectorEvent.emit(new EventEmitted(this.teamNames[this.selectedTeamIndex], this.selectedReleaseSnapshot));
  }
  OnSnapshotSelect() {
    this.LoaderEvent.emit(true);
    this.selectedReleaseSnapshot = this.selectedTeamRelease.snapshots[this.selectedSnapshotIndex];
    this.productionDate = this.selectedTeamRelease.productionDate;
    this.currentPhase = this.selectedTeamRelease.currentPhase;
    this.dateRefreshedOn = this.selectedReleaseSnapshot.dateRefreshedOn;
    this.SnapshotSelectorEvent.emit(new EventEmitted(this.teamNames[this.selectedTeamIndex], this.selectedReleaseSnapshot));
  }
  ngOnInit() {
  }
  ngOnChanges()
  {
    if (this.incomingTeamIndex != -1) {
      this.selectedTeamIndex = this.incomingTeamIndex;
      this.getSelectedTeamData().then(data => {
        this.selectedTeam = data;
        this.selectedTeamRelease = this.selectedTeam.releases[0];
        this.selectedReleaseSnapshot = this.selectedTeamRelease.snapshots[0];
        this.selectedReleaseIndex = 0;
        this.selectedSnapshotIndex = 0;
        this.productionDate = this.selectedTeamRelease.productionDate;
        this.currentPhase = this.selectedTeamRelease.currentPhase;
        this.dateRefreshedOn = this.selectedReleaseSnapshot.dateRefreshedOn;
        this.isDisabled = false;
        this.TeamSelectorEvent.emit(new EventEmitted(this.teamNames[this.selectedTeamIndex], this.selectedReleaseSnapshot));
      });
    }
  }
}