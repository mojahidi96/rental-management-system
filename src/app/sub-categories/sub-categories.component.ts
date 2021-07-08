import { Component, Input, OnInit } from '@angular/core';
import { constant } from '../app.constant';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {

  @Input() category: any;

  imagePath: string = constant.imagePath;
  
}
