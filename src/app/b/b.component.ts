import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  title:string = 'myfirstapp';
  name:string = 'james';
  age:number =26;
}
