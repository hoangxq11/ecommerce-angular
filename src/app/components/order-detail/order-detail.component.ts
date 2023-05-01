import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillData } from 'src/app/commons/response/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  billId!: number;
  billData!: BillData;
  receiveDate!: Date;

  constructor(
    private router: Router,
    private orderService: OrderService,
    public toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    const currentUrl = this.router.url.split("/");
    const billId = currentUrl[currentUrl.length - 1];
    this.billId = Number(billId);
    this.getBillById();
  }

  getBillById() {
    this.orderService.getBillById(this.billId).subscribe(data => {
      this.billData = data.data;
      this.calculateReceiveDate();
    }, error => {
      this.toastrService.error('Có lỗi xảy ra vui lòng thử lại sau');
      console.log(error);
    })
  }

  calculateReceiveDate() {
    const paymentTime = new Date(this.billData.paymentTime);
    this.receiveDate = paymentTime;
    this.receiveDate.setDate(paymentTime.getDate() + this.billData.shippingService.time);
  }

  convertToSlug(text:string) {
    return text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
  }

}
