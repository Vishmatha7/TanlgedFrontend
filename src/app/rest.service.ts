import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:51992/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {
    
   }


   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProffesion(): Observable<any> {
    return this.http.get(endpoint + 'proffesion').pipe(
      map(this.extractData));
  }

  getPrimarySearch(Proffesion , State, Date): Observable<any> {

    return this.http.get(endpoint + 'stylist/' + Proffesion+'/'+State+'/'+ Date.year+Date.month+Date.day ).pipe(
      tap(_ => console.log(`search stylist=${Proffesion}+${State}+${Date}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
