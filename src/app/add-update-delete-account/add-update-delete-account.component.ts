import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamDashoardData, Release, Snapshot, Path, EventEmitted, LineDetail, AccountDashboardData, Account } from '../DataStructures';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AccountService } from '../account.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { SnacbarMessageComponent } from '../snacbar-message/snacbar-message.component';

@Component({
  selector: 'app-add-update-delete-account',
  templateUrl: './add-update-delete-account.component.html',
  styleUrls: ['./add-update-delete-account.component.css']
})
export class AddUpdateDeleteAccountComponent implements OnInit {


  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private _accountService: AccountService, private route: ActivatedRoute, private router: Router) {

  }


  public accounts: Account[];
  public selectedLineNames: string[];
  public account: Account = new Account();
  public selectedAccountIndex: number = -1;
  public lineNames: string[];
  public formButtonName = "Add Account";
  public isSelected: boolean[] = [];
  public accountNameDisabled = false;

  modifyAccount() {
    if (this.selectedAccountIndex != -1) {
      this.accountNameDisabled = true;
      this.formButtonName = "Update Account";
      let accountToBeModified: Account = this.accounts[this.selectedAccountIndex];
      this.account.setProperties(accountToBeModified);
      var i, j;
      //initialise isSelected with false
      for (i = 0; i < this.isSelected.length; i++) {
        this.isSelected[i] = false;
      }
      //set the isSeleccted Array
      for (i = 0; i < this.account.lineNames.length; i++) {
        for (j = 0; j < this.lineNames.length; j++) {
          if (this.lineNames[j] == this.account.lineNames[i]) {
            this.isSelected[j] = true;
          }
        }
      }
      //----------------------
    }
    else {
      this.openSnackBar("Select Account First");
    }
  }



  deleteAccount() {
    if (this.selectedAccountIndex != -1) {
      const dialogRef = this.dialog.open(PopUpComponent, {
        data: {
          responseMessage: "Are you sure, you want to delete this account ?"
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._accountService.deleteAccount(this.accounts[this.selectedAccountIndex].accountName).then(data => {
            this.openSnackBar(data.responseMessage)
            this._accountService.getAllAccountDetails().then(lines => {
              this.accounts = lines;
              this.selectedAccountIndex = -1;
              this.onReset();
            });
          });
        }
      });
    }
    else {
      this.openSnackBar("Select Account First")
    }
  }

  onSubmit() {
    if (this.formButtonName == "Add Account") {
      this.addAccount();
    }
    else {
      this.updateAccount();

      this.onReset();
    }
  }


  addAccount() {
    for (let i = 0; i < this.isSelected.length; i++) {
      if (this.isSelected[i]) {
        this.account.lineNames.push(this.lineNames[i]);
      }
    }

    if (this.validateAccount()) {
      this._accountService.addAccount(this.account).then(data => {
        this.openSnackBar(data.responseMessage);
        this._accountService.getAllAccountDetails().then(accounts => {
          this.accounts = accounts;
          this.onReset();
        })
      });


    }
    else {
      this.openSnackBar("Fill all the fields")
    }
  }



  validateAccount() {
    if (!this.account.accountName || (this.account.accountName == "") || (this.account.lineNames.length == 0)) {
      return false;
    }
    return true;
  }
  updateAccount() {
    if (this.selectedAccountIndex != -1) {

      this.account.lineNames = [];
      for (var i = 0; i < this.lineNames.length; i++) {
        if (this.isSelected[i] == true) {
          this.account.lineNames.push(this.lineNames[i]);
        }
      }

      if (this.validateAccount()) {
        this._accountService.updateAccount(this.account).then(data => {
          this.openSnackBar(data.responseMessage);
          this._accountService.getAllAccountDetails().then(accounts => {
            this.accounts = accounts;
            this.onReset();
            this.selectedAccountIndex = -1;
          })
        });

      }
      else {
        this.openSnackBar("Fill all the details ")
      }
    }

  }




  onSelectionIndex(value1) {
    this.selectedAccountIndex = value1;
  }
  onReset() {
    this.account.resetProperties();
    for (let i = 0; i < this.isSelected.length; i++) {
      this.isSelected[i] = false;
    }
    this.formButtonName = "Add Account";
    this.accountNameDisabled = false;
  }

  onResetRight() {
    this.selectedAccountIndex = -1;
    this.onReset();
  }

  ngOnInit() {
    this._accountService.getAllLineNames().then(data => {
      this.lineNames = data;
      let i: number;
      for (i = 0; i < data.length; i++) {
        this.isSelected.push(false);
      }
    });
    this._accountService.getAllAccountDetails().then(data => {
      this.accounts = data;
    });

  }

  openSnackBar(message: string, ) {
    this.snackBar.openFromComponent(SnacbarMessageComponent, {
      data: message,
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center",
      direction: "ltr",
      panelClass: ['snackbar-class']
    });
  }
}
