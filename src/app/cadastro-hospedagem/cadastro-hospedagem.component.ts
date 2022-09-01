import { Component, OnInit } from '@angular/core';
import { iHos } from '../iHos';
import { HospedagemService } from '../hospedagem.service';
import { __classPrivateFieldGet } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-hospedagem',
  templateUrl: './cadastro-hospedagem.component.html',
  styleUrls: ['./cadastro-hospedagem.component.css'],
})
export class CadastroHospedagemComponent implements OnInit {
  constructor(
    private HospedagemService: HospedagemService,
    private router: Router
  ) {}

  hospModel: iHos = new iHos();
  cafe: any;
  almoco: any;
  janta: any;
  isAdmin: any = localStorage.getItem('admin');

  public isCheckedCafe: boolean | undefined;
  public isCheckedAlmoco: boolean | undefined;
  public isCheckedJanta: boolean | undefined;

  async ngOnInit() {
    if (this.isAdmin !== '1') {
      await this.router.navigate(['/login']);
      console.log(this.isAdmin);
    }
  }

  click(ev: any) {
    console.log(ev.target.defaultValue);
  }

  checkCafe() {
    this.cafe = this.isCheckedCafe;
  }

  checkAlmoco() {
    this.almoco = this.isCheckedAlmoco;
  }

  checkJanta() {
    this.janta = this.isCheckedJanta;
  }

  checkboxChanged(event: any) {
    console.log(event.checked);
  }

  inserirHosp(
    _nome: any,
    _apto: any,
    _nomeHotel: any,
    _dataCheckin: any,
    _dataCheckout: any,
    _qtdeA: any,
    _qtdeC: any,
    _qtdeN: any
  ) {
    this.hospModel = {
      nome: _nome.value,
      apto: _apto.value,
      nomeHotel: _nomeHotel.value,
      dataCheckin: _dataCheckin.value,
      dataCheckout: _dataCheckout.value,
      qtdeA: _qtdeA.value,
      qtdeC: _qtdeC.value,
      qtdeN: _qtdeN.value,
      cafe: this.cafe,
      almoco: this.almoco,
      janta: this.janta,
    };
    if (
      this.hospModel.nome !== '' &&
      this.hospModel.apto !== '' &&
      this.hospModel.nomeHotel !== '' &&
      this.hospModel.dataCheckin !== '' &&
      this.hospModel.dataCheckout !== '' &&
      this.hospModel.qtdeA !== '' &&
      this.hospModel.qtdeC !== '' &&
      this.hospModel.qtdeN !== ''
    ) {
      this.HospedagemService.insertHosp(this.hospModel).then(() =>
        this.gotoRestaurante()
      );
      console.log(this.hospModel);
    } else {
      window.alert('Insira todos os campos!');
    }
  }

  gotoRestaurante() {
    this.router.navigate(['/restaurante']);
  }
}
