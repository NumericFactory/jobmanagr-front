import {
  Component,
  Input,
  Output,
  SimpleChanges,
  Inject,
  EventEmitter,
} from '@angular/core';
import { ModalDialogComponent } from '../../../shared/components/modal-dialog/modal-dialog.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['top']);
    this.theTop = changes['top'].currentValue.toString() + 'px';
    this.theLeft = changes['left'].currentValue.toString() + 'px';
    console.log(this.theTop);
    console.log(this.theLeft);
  }

  openDialogCreateNewJob(ev: Event): void {
    ev.preventDefault();
    console.log(this.contextMenuIsOpenedEvent);
    this.contextMenuIsOpenedEvent.emit(false);
    console.log('open');
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: { name: this.name, animal: this.animal },
      width: '1200px',
      height: '550px',
      panelClass: 'dialog-class', // Add a custom panel class,
      backdropClass: 'backdrop-class',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
