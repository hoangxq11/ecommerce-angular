import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryRes } from 'src/app/commons/response/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  categoryRes!: CategoryRes;

  constructor(private modalService: NgbModal, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getDataCategory();
  }

  getDataCategory() {
    this.categoryService.getDataCategory().subscribe(data => {
      this.categoryRes = data;
      console.log(this.categoryRes.data)
    }, error => {
      console.log(error);
    });
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent, {
      backdrop: false,
      size: 'lg'
    });
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterComponent, {
      backdrop: false,
      size: 'lg'
    });
  }
}
