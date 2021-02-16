import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {
  private readonly API = 'https://api.github.com/users/Miguel-Coruj/repos'

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>(this.API)
  }
}