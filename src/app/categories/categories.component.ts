import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constant } from '../app.constant';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Input() branch: any;

  @Output() subCategoriesEven = new EventEmitter();

  category: any;
  imagePath: string = constant.imagePath;

  setSubCategories(category: any) {
    this.subCategoriesEven.emit(category);
  }

}
