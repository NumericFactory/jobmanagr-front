import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  top: string = '0px';
  left: string = '0px';
  contextMenuIsOpened: boolean = false;

  onRightClick(ev: any) {
    console.log('onRightClick');
    console.log(ev);
    this.top = ev.clientY;
    this.left = ev.clientX;
    this.contextMenuIsOpened = true;
    return false;
  }

  hideContextMenu() {
    this.contextMenuIsOpened = false;
  }

  openOrCloseContextMenu(ev: any) {
    ev ? (this.contextMenuIsOpened = true) : (this.contextMenuIsOpened = false);
  }
}
