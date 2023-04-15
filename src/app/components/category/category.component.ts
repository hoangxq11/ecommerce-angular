import { Component, OnInit } from '@angular/core';
import { CategoryRes } from 'src/app/commons/response/category';
import { ProductRes } from 'src/app/commons/response/product';
import { SearchSpecRes } from 'src/app/commons/response/search';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categoryRes!: CategoryRes;
  searchSpecRes!: SearchSpecRes;

  productRes!: ProductRes;

  constructor(private categoryService: CategoryService, private productService: ProductService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getDataCategorySpe();
    this.getDataProductSpec();
  }

  getDataProductSpec(){
      this.productService.getDataProductSpec().subscribe(data => {
        this.productRes = data;
        console.log(this.productRes)
      }, error => {
        console.log(error);
      })
  }

  getDataCategorySpe() {
    this.categoryService.getDataCategorySpe().subscribe(data => {
      this.categoryRes = data;
      console.log(this.categoryRes);
    }, error => {
      console.log(error);
    });
  }

  getSearchSpecial() {
    this.searchService.getSearchSpecial().subscribe(data => {
      this.searchSpecRes = data;
    }, error => {
      console.log(error);
    })
  }

}
