import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = environment.login;
  senha = environment.senha;
  loginc = environment.loginc;
  senhac = environment.senhac;
  isAdmin: any = localStorage.getItem('admin');

  constructor(
    private HospedagemService: HospedagemService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  goToAdmin(login: any, senha: any) {
    if (login == this.login && senha == this.senha) {
      localStorage.setItem('admin', '1');
      this.router.navigate(['/restaurante']);
    } else if (login == this.loginc && senha == this.senhac) {
      localStorage.setItem('admin', '3');
      this.router.navigate(['/restaurante']);
    } else {
      alert('Credenciais Incorretas!');
    }
  }
}
