import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AccountDashboardData, Snapshot, EventEmitted } from '../DataStructures';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-account-dashboard-table-selector',
  templateUrl: './account-dashboard-table-selector.component.html',
  styleUrls: ['./account-dashboard-table-selector.component.css']
})
export class AccountDashboardTableSelectorComponent implements OnInit, OnChanges {
  @Input() incomingAccountIndex: number;
  @Input() accountNames: string[];
  @Output() AccountSelectorEvent: EventEmitter<EventEmitted>;
  @Output() SnapshotSelectorEvent: EventEmitter<EventEmitted>;
  @Output() LoaderEvent: EventEmitter<boolean>;
  public isDisabled: boolean = true;
  public selectedAccountIndex: number = -1;
  public selectedSnapshotIndex: number = -1;
  public selectedAccount: AccountDashboardData = new AccountDashboardData();
  public selectedAccountSnapshot: Snapshot = new Snapshot();
  constructor(private _dashboardService: DashboardService) {
    this.AccountSelectorEvent = new EventEmitter<EventEmitted>();
    this.SnapshotSelectorEvent = new EventEmitter<EventEmitted>();
    this.LoaderEvent = new EventEmitter<boolean>();
  }
  onAccountSelect() {
    this.LoaderEvent.emit(true);
    this._dashboardService.getAccountDashboardData(this.accountNames[this.selectedAccountIndex]).then(data => {
      this.selectedAccount = data;
      this.selectedAccountSnapshot = this.selectedAccount.snapshots[0];
      this.selectedSnapshotIndex = 0;
      this.isDisabled = false;
      this.AccountSelectorEvent.emit(new EventEmitted(this.accountNames[this.selectedAccountIndex], this.selectedAccountSnapshot));
    });
  }
  onSnapshotSelect() {
    this.LoaderEvent.emit(true);
    this.selectedAccountSnapshot = this.selectedAccount.snapshots[this.selectedSnapshotIndex];
    this.SnapshotSelectorEvent.emit(new EventEmitted(this.accountNames[this.selectedAccountIndex], this.selectedAccountSnapshot));

  }
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.incomingAccountIndex != -1) {
      this.selectedAccountIndex = this.incomingAccountIndex;
      this._dashboardService.getAccountDashboardData(this.accountNames[this.selectedAccountIndex]).then(data => {
        this.selectedAccount = data;
        this.selectedAccountSnapshot = this.selectedAccount.snapshots[0];
        this.selectedSnapshotIndex = 0;
        this.isDisabled = false;
        this.AccountSelectorEvent.emit(new EventEmitted(this.accountNames[this.selectedAccountIndex], this.selectedAccountSnapshot));
      });
    }
  }
}