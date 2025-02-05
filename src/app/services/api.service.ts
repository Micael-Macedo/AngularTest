import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);
  constructor() { }


  getFruits() {
    return this.httpClient.get<string[]>('http://localhost:3000/fruits');
  }
}
