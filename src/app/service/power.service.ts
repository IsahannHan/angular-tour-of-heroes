import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Power } from '../models/power';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  private powersURL = 'api/powers';
  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }

  // Methods 
  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  // Methods

  addPower(power: Power): Observable<Power> {
    return this.http.post<Power>(this.powersURL, power, this.httpOptions)
    .pipe(
      tap((newPower: Power) => this.log(`Added power with id ${newPower.id}`, 'Close', 2)),
      catchError(this.handleError<Power>('addPower'))
    );
  }

  updatePower(power: Power): Observable<any> {
    return this.http.put(this.powersURL, power, this.httpOptions)
    .pipe(
      tap(_ => this.log(`Updated power with id ${power.id}`, 'Close', 2)),
      catchError(this.handleError<any>('updatePower'))
    );
  }

  deletePower(power: Power | number): Observable<Power> {
    const id = typeof power === 'number' ? power : power.id;
    const url = `${this.powersURL}/${id}`;

    return this.http.delete<Power>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log(`Deleted power with id ${id}`, 'Close', 2)),
      catchError(this.handleError<Power>('deletePower'))
    );
  }

  getPowers(): Observable<Power[]> {
    return this.http.get<Power[]>(this.powersURL)
    .pipe(
      tap(powers => this.log(`Fetched ${powers.length} powers`, 'Close', 2)),
      catchError(this.handleError<Power[]>('getPowers', []))
    );
  }
  
  getPower(id: number): Observable<Power> {
    const url = `${this.powersURL}/${id}`;
    return this.http.get<Power>(url)
    .pipe(
      tap(_ => this.log(`Fetched power with id ${id}`, 'Close', 2)),
      catchError(this.handleError<Power>(`getPower id=${id}`))
    );
  }

  private log(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration * 1000
    });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`, 'Close', 2);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
