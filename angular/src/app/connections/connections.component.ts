import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  template: `<h1>Last plugged in connection</h1>


<div ng-if='level > 30'>
   <div>Your number of connections is {{connections}}</div>
</div>
<div ng-if='level <= 30'>
</div>



  <button (click)='level = 2'>level 2</button>
  <button (click)='level = 40'> level 40</button>
  `,
  styles: []
})
export class ConnectionsComponent implements OnInit {

  constructor() { }

  level = 30;

  connections = 20;


  ngOnInit() {
  }

}
