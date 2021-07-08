import { Component } from '@angular/core';
import { constant } from './app.constant';
import { catalogs } from './mocked-catalog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  locations: any;
  branches: any;
  constant: any = constant;
  branch: any;
  category: any;
  isOnHomePage: boolean = true;

  ngOnInit() {
    this.isOnHomePage = true;
    this.locations = catalogs.data.locations;

  }

  setBranch(location: any) {
    if (location.branches) {
      this.branches = location.branches;
    }
  }

  setCategories(branch: any) {
    if (branch.categories) {
      this.isOnHomePage = false;
      this.branch = branch;
    }
  }

  setSubCategories(category: any) {
    this.category = category;
    if (category.subcategories) {
      this.category.subcategories = category.subcategories.filter((subCategory: any) => subCategory.name !== 'NA');
    }
  }

  goToCategory() {
    this.category = null;
  }
}
