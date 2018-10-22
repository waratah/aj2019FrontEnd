import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class='navspacer'>
  <nav class="navbar navbar-light bg-faded navbar-toggleable-md">
    <button class="navbar-toggler navbar-toggler-right" type="button" (click)='isCollapsed = !isCollapsed'
        aria-controls="navbarSupportedContent" [attr.aria-expanded]="!isCollapsed" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" routerLink="/" routerLinkActive="active">AJ2019 - HiTech - Scoreboard</a>
    <div class="navbar-collapse" [collapse]="isCollapsed" >
      <ul class="navbar-nav">
        <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/" routerLinkActive="active">Top Score</a></li>
        <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/register" routerLinkActive="active">Register</a></li>
        <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/details" routerLinkActive="active">Details</a></li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  isCollapsed = true;
}
