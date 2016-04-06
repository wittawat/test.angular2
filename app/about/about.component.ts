import {Component} from 'angular2/core';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html'
})

export class AboutComponent{
  title: string = 'About Page';
    body:  string = 'This is the about page body';
    message: string;
    firstName = '5555';
    style="background-color:red";

    constructor(){
      
    }
    updateMessage(m:string){
      console.log(m);
    }
}
