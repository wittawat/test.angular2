import {Component} from 'angular2/core';
import {AboutComponent} from './about/about.component';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'app',
  templateUrl:'app/app.component.html',
  styleUrls: ["app/app.component.css"],
  directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
  //{path: '/home',        name: 'Home',        component: HomeComponent, useAsDefault: true },
    {path: '/about',       name: 'About',       component: AboutComponent },
    //{path: '/experiments', name: 'Experiments', component: ExperimentsComponent }
])
export class AppComponent{
  message:"Hello world";
}
