import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountRegister } from 'src/app/commons/response/account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  accountRegister: AccountRegister = new AccountRegister();
  staticAlertClosed!: boolean;
  error!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.staticAlertClosed = true;
    if (this.authService.isLoggedIn()) this.router.navigate([""]);
  }

  onSubmit() {
    this.accountRegister.authorities = ['ROLE_CUSTOMER']
    this.accountService.register(this.accountRegister).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
    }
    form.classList.add('was-validated');
  }
}
