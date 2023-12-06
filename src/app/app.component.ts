import { Component } from '@angular/core';
import { SkillGateway } from './core/ports/skills.gateway';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JobManagr';
  top: string = '0px';
  left: string = '0px';
  contextMenuIsOpened: boolean = false;

  constructor(private skillGateway: SkillGateway) { }

  ngOnInit() {
    this.skillGateway.getSkills();
  }

  onRightClick(ev: any) {

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
