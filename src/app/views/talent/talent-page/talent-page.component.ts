import { Component } from '@angular/core';

@Component({
  selector: 'app-talent-page',
  template: `<div class="d-flex" style="padding-top: 20px; padding-bottom:50px">
      <app-jobs-list style="width:100%; margin-right:50px"></app-jobs-list>
      <app-talents-list style="min-width:350px; max-width:500px"></app-talents-list>
    </div>
  `,
  styles: []
})
export class TalentPageComponent {

}
