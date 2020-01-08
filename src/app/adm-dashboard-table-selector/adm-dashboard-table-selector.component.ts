import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Snapshot } from '../DataStructures';

@Component({
  selector: 'app-adm-dashboard-table-selector',
  templateUrl: './adm-dashboard-table-selector.component.html',
  styleUrls: ['./adm-dashboard-table-selector.component.css']
})
export class AdmDashboardTableSelectorComponent implements OnInit {

  @Input() adm:Snapshot[];
  @Output() SnapshotSelectorEvent:EventEmitter<number>;
  public isDisabled:boolean=true;
  public selectedSnapshotIndex:number=-1;
  public selectedSnapshot:Snapshot;


  constructor() { 
    this.SnapshotSelectorEvent=new EventEmitter<number>();
  }

  onSnapshotSelect()
  {
    this.SnapshotSelectorEvent.emit(this.selectedSnapshotIndex);
  }
  ngOnInit() {
    this.selectedSnapshotIndex=0;
  }

}
