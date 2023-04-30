import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BillData } from 'src/app/commons/response/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  billListData!: BillData[];

  orderStatus: string = 'ALL'

  constructor(
    private orderService: OrderService,
    public toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getBills();
  }

  getBills() {
    this.orderService.getBills().subscribe(data => {
      this.billListData = data.data;
      console.log(this.billListData)
    }, error => {
      console.log(error);
      this.toastrService.error('Có lỗi xảy ra vui lòng thử lại sau');
    })
  }

  allOrder() {
    this.orderStatus = 'ALL';
  }

  pendingOrder(){
    this.orderStatus = 'PENDING';
  }

  shippingOrder(){
    this.orderStatus = 'SHIPPING';
  }

  canceledOrder(){
    this.orderStatus = 'CANCELED';
  }

  doneOrder(){
    this.orderStatus = 'DONE';
  }

}
