import {
  Component,
  Input,
  Output,
  SimpleChanges,
  Inject,
  EventEmitter,
} from '@angular/core';
import { ModalDialogAddJobFormComponent } from 'src/app/views/jobs/add-job-form/add-job-form.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { AddTalentFormComponent } from 'src/app/views/talents/add-talent-form/add-talent-form.component';
import { AddCustomerFormComponent } from 'src/app/views/customers/add-customer-form/add-customer-form.component';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css'],
})
export class ContextmenuComponent {
  @Input() top!: string;
  @Input() left!: string;

  @Output() contextMenuIsOpenedEvent = new EventEmitter<boolean>();

  theTop: string = '0px';
  theLeft: string = '0px';

  animal: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges) {
    this.theTop = changes['top'].currentValue.toString() + 'px';
    this.theLeft = changes['left'].currentValue.toString() + 'px';
  }

  openDialogCreateNewJob(ev: Event): void {
    ev.preventDefault();
    this.contextMenuIsOpenedEvent.emit(false);
    const dialogRef = this.dialog.open(ModalDialogAddJobFormComponent, {
      width: '750px',
      maxWidth: '85rem;',
      position: { top: '50px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
    });
  }

  openDialogCreateNewCustomer(ev: Event): void {
    ev.preventDefault();
    this.contextMenuIsOpenedEvent.emit(false);
    const dialogRef = this.dialog.open(AddCustomerFormComponent, {
      width: '750px',
      position: { top: '50px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
    });
  }

  openDialogCreateNewTalent(ev: Event): void {
    ev.preventDefault();
    this.contextMenuIsOpenedEvent.emit(false);
    const dialogRef = this.dialog.open(AddTalentFormComponent, {
      width: '750px',
      position: { top: '50px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
    });
  }
}
