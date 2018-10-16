import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { 
    this._baseUrl ="http://localhost:51992/api/"
  }
  _baseUrl : string;

  public get baseUrl() : string {
    return this._baseUrl;
  }
  public set baseUrl(v : string) {
    this._baseUrl = v;
  }
}
