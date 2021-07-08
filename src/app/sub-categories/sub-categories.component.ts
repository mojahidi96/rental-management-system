import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  @Input() category: any;
  
  imagePath: string = '../assets/category/';


  constructor() { }

  ngOnInit(): void {
  }

}
