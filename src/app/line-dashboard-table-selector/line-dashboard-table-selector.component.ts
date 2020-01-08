import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LineDashboardData, Snapshot, EventEmitted } from '../DataStructures';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-line-dashboard-table-selector',
  templateUrl: './line-dashboard-table-selector.component.html',
  styleUrls: ['./line-dashboard-table-selector.component.css']
})
export class LineDashboardTableSelectorComponent implements OnInit,OnChanges {

  public isDisabled:boolean=true;
  public selectedLineIndex:number=-1;
  public selectedSnapshotIndex:number=-1;
  public selectedLine:LineDashboardData=new LineDashboardData();
  public selectedLineSnapshot:Snapshot=new Snapshot();
  @Input() incomingLineIndex:number;
  @Input() lineNames:string[];
  @Output() LineSelectorEvent:EventEmitter<EventEmitted>;
  @Output() SnapshotSelectorEvent:EventEmitter<EventEmitted>;
  @Output() LoaderEvent:EventEmitter<boolean>;
  

  constructor(private _dashboardService:DashboardService) { 
    this.LineSelectorEvent=new EventEmitter<EventEmitted>();
    this.SnapshotSelectorEvent=new EventEmitter<EventEmitted>();
    this.LoaderEvent=new EventEmitter<boolean>();

  }

  onLineSelect()
  {
    this.LoaderEvent.emit(true);
    this._dashboardService.getLineDashboardData(this.lineNames[this.selectedLineIndex]).then(data => {
      this.selectedLine= data;
      this.selectedLineSnapshot = this.selectedLine.snapshots[0];
      this.selectedSnapshotIndex = 0;
      this.isDisabled = false;
      this.LineSelectorEvent.emit(new EventEmitted(this.lineNames[this.selectedLineIndex], this.selectedLineSnapshot));
    });
  }
  onSnapshotSelect()
  {
    this.LoaderEvent.emit(true);
    this.selectedLineSnapshot=this.selectedLine.snapshots[this.selectedSnapshotIndex];
    this.SnapshotSelectorEvent.emit(new EventEmitted(this.lineNames[this.selectedLineIndex], this.selectedLineSnapshot));
  }
  ngOnInit() {

  }
  ngOnChanges()
  {
    if (this.incomingLineIndex != -1) {
      this.selectedLineIndex = this.incomingLineIndex;
      this._dashboardService.getLineDashboardData(this.lineNames[this.selectedLineIndex]).then(data => {
        this.selectedLine = data;
        this.selectedLineSnapshot = this.selectedLine.snapshots[0];
        this.selectedSnapshotIndex = 0;
        this.isDisabled = false;
        this.LineSelectorEvent.emit(new EventEmitted(this.lineNames[this.selectedLineIndex], this.selectedLineSnapshot));
      });
    }
  }

}
