import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `<h1>Register a machine</h1>
  <form ng-submit='saveRegistration()'>
    <div class="form-group">
      <label for="Contingent">Contingent</label>
      <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter memberNo">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">SubCamp</label>
      <input type="char" class="form-control" id="exampleInputEmail1" placeholder="Enter memberNo">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveRegistration() {

  }

}
