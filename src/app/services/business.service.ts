import { BusinessResponse } from './../models/business-response';
import { Business } from 'src/app/models/business';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  business:Business;
  basePath:string=environment.basePathBusiness;

  actualBusiness!:BusinessResponse;

  constructor(private http: HttpClient) { }

  getBusiness(){
    return this.http.get<Business[]>(this.basePath)
  }

  setActualBusiness(business:Business){
    this.actualBusiness=business;
  }

  getActualBusiness(){
    return this.actualBusiness;
  }

  getBusinessId(id:any){
    return this.http.get<Business>(`${this.basePath}/${id}`)
  }

  /*getBusinessByUserId(id:any):any{


    return this.http.post(`${this.basePath}/${id}`,this.actualBusiness);
  }*/

  getBusinessByUserId(id:any){
    return this.http.get<Business>(`${this.basePath}/${id}`)
  }
  
  addBusiness(business: any){
    return this.http.post<Business>(
      `${this.basePath}`,
      business
    );
  }

  updateBusiness(id: any, business: Business) {
    return this.http.put<Business>(`${this.basePath}/${id}`, business);
  }
}
