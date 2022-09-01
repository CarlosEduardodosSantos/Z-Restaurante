import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iHos } from './iHos';
import { iAli } from './iAli';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HospedagemService {
  public isAdmin: any;

  constructor(private HttpClient: HttpClient) {}
  public obterHos() {
    return this.HttpClient.get<iHos[]>(
      `${environment.apiurl}api/Hospedagem/obterTodosHosp`
    ).toPromise();
  }

  public obterHosById(id: any) {
    return this.HttpClient.get<iHos>(
      `${environment.apiurl}api/Hospedagem/obterByHospId/${id}`
    ).toPromise();
  }

  public insertHosp(hospedagem: iHos) {
    return this.HttpClient.post<iHos>(
      `${environment.apiurl}api/Hospedagem/adicionar`,
      hospedagem
    ).toPromise();
  }

  public editHosp(hospedagem: iHos) {
    return this.HttpClient.put<iHos>(
      `${environment.apiurl}api/Hospedagem/alterar`,
      hospedagem
    ).toPromise();
  }

  public deleteHosp(id: any) {
    return this.HttpClient.delete<iHos>(
      `${environment.apiurl}api/Hospedagem/deletar/${id}`
    ).toPromise();
  }

  public obterAli() {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterTodosHospAli`
    ).toPromise();
  }

  public obterAliByDate(data: any) {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterAliByData/${data}`
    ).toPromise();
  }

  public obterAliByNome(data: any, nome: any) {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterAliByNome/${data}/${nome}`
    ).toPromise();
  }

  public editAli(alimentacao: iAli) {
    return this.HttpClient.put<iAli>(
      `${environment.apiurl}api/Hospedagem/alterarAli`,
      alimentacao
    ).toPromise();
  }

  public obterAliByCafe(data: any, cafe: any) {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterAliByCafe/${data}/${cafe}`
    ).toPromise();
  }

  public obterAliByAlmoco(data: any, almoco: any) {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterAliByAlmoco/${data}/${almoco}`
    ).toPromise();
  }

  public obterAliByJanta(data: any, janta: any) {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterAliByJanta/${data}/${janta}`
    ).toPromise();
  }

  public obterRelatorio(dataini: any, datafim: any) {
    return this.HttpClient.get<iAli[]>(
      `${environment.apiurl}api/Hospedagem/obterRelatorio/${dataini}/${datafim}`
    ).toPromise();
  }
}
