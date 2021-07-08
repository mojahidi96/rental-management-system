import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() branch: any;

  @Output() subCategoriesEven = new EventEmitter();

  category: any;
  imagePath: string = '../assets/category/';

  constructor() { }

  ngOnInit(): void {
  }

  setSubCategories(category: any) {
    this.subCategoriesEven.emit(category);
  }

}
