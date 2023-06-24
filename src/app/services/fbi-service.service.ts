import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FbiServiceService {

  constructor(private http: HttpClient) { }

  // getMostWanted({
  //   return this.http.get(`https://api.fbi.gov/wanted/v1/list`);
  // })

  getMostWanted(){
    return this.http.get(`https://api.fbi.gov/wanted/v1/list`);
  }
}
