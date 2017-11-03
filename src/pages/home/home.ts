import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
myHome:string  = "my Home";
  constructor() {

  }
  ngOnInit(){
    this.myHome = "my Page";
  }

}
