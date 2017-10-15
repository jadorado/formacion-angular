import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Concert } from './concert';

@Injectable()
export class ConcertsService {

  constructor(private http: HttpClient) { }

  getConcerts(): Observable<Concert[]> {

    return this.http.get<Concert[]>('http://localhost:3000/concerts');
  }
}
