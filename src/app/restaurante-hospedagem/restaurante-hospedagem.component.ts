import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';
import { iHos } from '../iHos';
import { iAli } from '../iAli';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurante-hospedagem',
  templateUrl: './restaurante-hospedagem.component.html',
  styleUrls: ['./restaurante-hospedagem.component.css'],
})
export class RestauranteHospedagemComponent implements OnInit {
  aliModel: iAli = new iAli();
  alimentacao: any;
  hospedagem: any;
  dataagora = new Date().toISOString().substring(0, 10);
  nome: any;
  operacao: any = ' Todos';
  $: any;
  login = environment.login;
  senha = environment.senha;
  isAdmin: any = localStorage.getItem('admin');

  public isCheckedCafe: boolean | undefined;
  public isCheckedAlmoco: boolean | undefined;
  public isCheckedJanta: boolean | undefined;

  constructor(
    private HospedagemService: HospedagemService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (this.isAdmin !== '1' && this.isAdmin !== '3') {
      await this.router.navigate(['/login']);
      console.log(this.isAdmin);
    }
    //await this.HospedagemService.obterAli().then(ali => { this.alimentacao = ali});
    this.HospedagemService.isAdmin = localStorage.getItem('admin');
    await this.HospedagemService.obterAliByDate(this.dataagora).then((ali) => {
      this.alimentacao = ali;
      console.log(ali);
    });
    console.log(this.dataagora);
    console.log(this.alimentacao);
  }

  getByName(data: any, nome: any) {
    if (nome !== '' && nome !== null && nome !== undefined) {
      if (data.value !== '' && data.value !== undefined)
        this.HospedagemService.obterAliByNome(data.value, nome).then((ali) => {
          this.alimentacao = ali;
          console.log(ali);
        });
      else {
        this.HospedagemService.obterAliByNome(this.dataagora, nome).then(
          (ali) => {
            this.alimentacao = ali;
            console.log(ali);
          }
        );
      }
      this.operacao = 'Todos';
    } else if (data.value !== '' && data.value !== undefined) {
      console.log(data.value);
      this.HospedagemService.obterAliByDate(data.value).then((ali) => {
        this.alimentacao = ali;
        console.log(ali);
      });
      this.operacao = 'Todos';
    } else {
      this.HospedagemService.obterAliByDate(this.dataagora).then((ali) => {
        this.alimentacao = ali;
        console.log(ali);
      });
      this.operacao = 'Todos';
    }
  }

  getByDate(data: any) {
    this.HospedagemService.obterAliByDate(data.value).then((ali) => {
      this.alimentacao = ali;
      console.log(ali);
    });
    console.log(data.value);
  }
  getByCafe(data: any) {
    if (data.value !== '') {
      this.HospedagemService.obterAliByCafe(data.value, true).then((ali) => {
        this.alimentacao = ali;
        console.log(ali);
      });
    } else {
      this.HospedagemService.obterAliByCafe(this.dataagora, true).then(
        (ali) => {
          this.alimentacao = ali;
          console.log(ali);
        }
      );
    }
    this.operacao = 'Café';
  }

  getByAlmoco(data: any) {
    if (data.value !== '') {
      this.HospedagemService.obterAliByAlmoco(data.value, true).then((ali) => {
        this.alimentacao = ali;
        console.log(ali);
      });
    } else {
      this.HospedagemService.obterAliByAlmoco(this.dataagora, true).then(
        (ali) => {
          this.alimentacao = ali;
          console.log(ali);
        }
      );
    }
    this.operacao = 'Almoco';
  }

  getByJanta(data: any) {
    if (data.value !== '') {
      this.HospedagemService.obterAliByJanta(data.value, true).then((ali) => {
        this.alimentacao = ali;
        console.log(ali);
      });
    } else {
      this.HospedagemService.obterAliByJanta(this.dataagora, true).then(
        (ali) => {
          this.alimentacao = ali;
          console.log(ali);
        }
      );
    }
    this.operacao = 'Janta';
  }

  checkCafe(i: any) {
    if (confirm('Deseja confirmar a refeição?')) {
      let vari = 0;
      let consumido = 1;
      this.aliModel = {
        alimentacaoId: this.alimentacao.results[i].alimentacaoId,
        nome: this.alimentacao.results[i].nome,
        apto: this.alimentacao.results[i].apto,
        nro: this.alimentacao.results[i].nro,
        data: this.alimentacao.results[i].data,
        cafe: vari,
        almoco: this.alimentacao.results[i].almoco,
        janta: this.alimentacao.results[i].janta,
        cConsumido: consumido,
      };
      this.HospedagemService.editAli(this.aliModel).then(() =>
        location.reload()
      );
    } else {
      location.reload();
    }
  }

  checkAlmoco(i: any) {
    if (confirm('Deseja confirmar a refeição?')) {
      let vari = 0;
      let consumido = 1;
      this.aliModel = {
        alimentacaoId: this.alimentacao.results[i].alimentacaoId,
        nome: this.alimentacao.results[i].nome,
        apto: this.alimentacao.results[i].apto,
        nro: this.alimentacao.results[i].nro,
        data: this.alimentacao.results[i].data,
        cafe: this.alimentacao.results[i].cafe,
        almoco: vari,
        janta: this.alimentacao.results[i].janta,
        aConsumido: consumido,
      };
      this.HospedagemService.editAli(this.aliModel).then(() =>
        location.reload()
      );
    } else {
      location.reload();
    }
  }

  checkJanta(i: any) {
    if (confirm('Deseja confirmar a refeição?')) {
      let vari = 0;
      let consumido = 1;
      this.aliModel = {
        alimentacaoId: this.alimentacao.results[i].alimentacaoId,
        nome: this.alimentacao.results[i].nome,
        apto: this.alimentacao.results[i].apto,
        nro: this.alimentacao.results[i].nro,
        data: this.alimentacao.results[i].data,
        cafe: this.alimentacao.results[i].cafe,
        almoco: this.alimentacao.results[i].almoco,
        janta: vari,
        jConsumido: consumido,
      };
      this.HospedagemService.editAli(this.aliModel).then(() =>
        location.reload()
      );
    } else {
      location.reload();
    }
  }

  converterLongDate(data: any) {
    let dataco = new Date(data).getUTCDate();
    let seconds = new Date(data).getSeconds();
    let min = new Date(data).getUTCMinutes();
    let hora = new Date(data).getUTCHours();
    let dia = new Date(data).getUTCDate();
    let mes = new Date(data).getUTCMonth() + 1;
    let ano = new Date(data).getFullYear();
    return dia + '/' + mes + '/' + ano;
  }

  gotoCadastro() {
    this.router.navigate(['/cadastro']);
  }

  goToAdmin(login: any, senha: any) {
    if (login == this.login && senha == this.senha) {
      localStorage.setItem('admin', '1');
      location.reload();
    } else {
      alert('Credenciais Incorretas!');
    }
  }
  goToRelatorio() {
    this.router.navigate(['/relatorio']);
  }
  logout() {
    localStorage.setItem('admin', '2');
    this.router.navigate(['/login']);
  }
}
