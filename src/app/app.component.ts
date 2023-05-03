import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sathiya Narayanan';
  skills = ['React JS', 'Angular JS', 'Java', 'Python', 'Java Script'];
  // getSkills(){
  //   setInterval(this.skills[0],5000);
  // };
}
