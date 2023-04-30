import { CategoryService } from 'src/app/services/category.service';
import { CategoryListRes } from './../../commons/response/category';
import { Component, OnInit } from '@angular/core';
import { SearchSpecRes } from 'src/app/commons/response/search';
import { SearchService } from 'src/app/services/search.service';
import { ProductService } from 'src/app/services/product.service';
import { ListProductDetailRes, ProductRes } from 'src/app/commons/response/product';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryRes!: CategoryListRes;
  searchSpecRes!: SearchSpecRes;

  productRes!: ProductRes;
  currentPage = 1;
  pageSize = 12;
  totalItems!: number;

  constructor(private categoryService: CategoryService, private productService: ProductService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getDataCategorySpe();
    this.getDataProductSpec();
  }

  getDataProductSpec(){
      this.productService.getDataProductSpec().subscribe(data => {
        this.productRes = data;
        this.totalItems = this.productRes.data.length;
      }, error => {
        console.log(error);
      })
  }

  getDataCategorySpe() {
    this.categoryService.getDataCategorySpe().subscribe(data => {
      this.categoryRes = data;
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

  convertToSlug(text:string) {
    return text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
  }

}
