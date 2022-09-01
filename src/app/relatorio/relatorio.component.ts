import { Component, OnInit } from '@angular/core';
import { iHos } from '../iHos';
import { HospedagemService } from '../hospedagem.service';
import { __classPrivateFieldGet } from 'tslib';
import { Router } from '@angular/router';
import { Moment } from 'moment';
import DateDiff from 'date-diff';
import * as moment from 'moment';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
})
export class RelatorioComponent implements OnInit {
  alimentacao: any;
  relatorio: any;
  isAdmin: any = localStorage.getItem('admin');
  totalAlmoco: any = 0;
  totalCafe: any = 0;
  totalJanta: any = 0;

  constructor(
    private HospedagemService: HospedagemService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (this.isAdmin !== '1') {
      await this.router.navigate(['/login']);
      console.log(this.isAdmin);
    }
  }

  gotoRestaurante() {
    this.router.navigate(['/restaurante']);
  }

  async montarArrayDates(dtIni: any, dtF: any) {
    this.HospedagemService.obterRelatorio(dtIni, dtF).then((rel) => {
      this.relatorio = rel;
      this.sumCafe();
      this.sumAlmoco();
      this.sumJanta();
      console.log(rel);
    });
  }

  converterLongDate(data: any) {
    let dataco = new Date(data).getUTCDate();
    let seconds = new Date(data).getSeconds();
    let min = new Date(data).getMinutes();
    let hora = new Date(data).getHours();
    let dia = new Date(data).getDate();
    let mes = new Date(data).getMonth() + 1;
    let ano = new Date(data).getFullYear();
    return dia + '/' + mes + '/' + ano;
  }

  printThisPage() {
    window.print();
  }
  sumCafe() {
    const sum = this.relatorio.results
    .reduce((sum: any, current: any) => sum + current.cafe, 0);
    this.totalCafe = sum;
  }
  sumAlmoco() {
    const sum = this.relatorio.results
    .reduce((sum: any, current: any) => sum + current.almoco, 0);
    this.totalAlmoco = sum;
  }
  sumJanta() {
    const sum = this.relatorio.results
    .reduce((sum: any, current: any) => sum + current.janta, 0);
    this.totalJanta = sum;
  }
}
