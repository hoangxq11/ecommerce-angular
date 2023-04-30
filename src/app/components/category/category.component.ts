import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryListRes, CategoryRes } from 'src/app/commons/response/category';
import { ProductRes } from 'src/app/commons/response/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  categoryRes!: CategoryRes;
  childCategoryRes!: CategoryListRes;
  productRes!: ProductRes;

  currentPage = 1;
  pageSize = 8;
  totalItems!: number;

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      const categoryId = params['id'].split("-").at(-1)?.replace("c", "");
      this.getProductsOfCategory(Number(categoryId));
      this.getCategoriesByParentId(Number(categoryId));
      this.getCategoriesById(Number(categoryId));
    });
  }

  getProductsOfCategory(categoryId: number){
      this.productService.getProductsOfCategory(categoryId).subscribe(data => {
        this.productRes = data;
        this.totalItems = this.productRes.data.length;
        console.log(this.productRes)
      }, error => {
        console.log(error);
      })
  }

  getCategoriesByParentId(parentId:number){
    this.categoryService.getCategoriesByParentId(parentId).subscribe(data => {
      this.childCategoryRes = data;
    }, error => {
      console.log(error);
    })
  }

  getCategoriesById(categoryId:number){
    this.categoryService.getCategoriesById(categoryId).subscribe(data => {
      this.categoryRes = data;
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
