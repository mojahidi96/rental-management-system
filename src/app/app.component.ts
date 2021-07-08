import { Component } from '@angular/core';
import { catalogs } from './mocked-catalog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locations: any;
  branches: any;
  imagePath: string = '../assets/category/'
  branch: any;
  category: any;

  ngOnInit() {
    console.log(catalogs)
    this.locations = catalogs.data.locations;
  }

  setBranch(location: any) {
    console.log(location)
    if (location.branches) {
      this.branches = location.branches;
    }
  }

  setCategories(branch: any) {
    console.log(branch)
    if (branch.categories) {
      this.branch = branch;
    }
  }

  setSubCategories(category: any) {
    console.log(category)
    this.category = category;
    if (category.subcategories) {
      this.category.subcategories = category.subcategories.filter((subCategory: any) => subCategory.name !== 'NA');
    }
  }

  goToCategory() {
    this.category = null;
  }
}
