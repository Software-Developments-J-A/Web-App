import { Injectable } from '@angular/core';
import { BusinessResponse } from '../models/business-response';

@Injectable({
  providedIn: 'root'
})
export class BusinessStorageService {

  private key: string = 'ng-auth';

  constructor() {}

  get user(): BusinessResponse {
    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      return objUser.user as BusinessResponse;
    }
    return null;
  }

  get isAuthenticated(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  set(object: any): void {
    localStorage.setItem(this.key, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
