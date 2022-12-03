import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  basePath:string= environment.basePathOrders;

  constructor(private http:HttpClient) { }


  saveOrder(consult: any) {
    const endpoint = `${this.basePath}`;
    return this.http.post<Order>(endpoint, consult);
  }

  /*searchByDates(date1: string, date2: string) {
    return this.http.get<Consult[]>(
      `${base_url}/consults/search/date?date1=${date1}&date2=${date2}`
    );
  }

  searchOthers(dni: string, fullname: string) {
    return this.http.get<Consult[]>(
      `${base_url}/consults/search/others?dni=${dni}&fullname=${fullname}`
    );
  }

  callProcedureOrFunction() {
    return this.http.get<any[]>(`${base_url}/consults/callProcedure`);
  }*/
}
