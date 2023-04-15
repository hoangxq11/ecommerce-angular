import { CategoryService } from 'src/app/services/category.service';
import { CategoryRes } from './../../commons/response/category';
import { Component, OnInit } from '@angular/core';
import { SearchSpecRes } from 'src/app/commons/response/search';
import { SearchService } from 'src/app/services/search.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetailRes, ProductRes } from 'src/app/commons/response/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
