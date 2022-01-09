import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestfulService {
  BASEURL: string = '/';

  constructor(private http: HttpClient) {}

  get(url: string): Observable<unknown> {
    return this.http
      .get(this.BASEURL + url)
      .pipe(catchError(this.errorHandler));
  }

  post(url: string, body: unknown): Observable<unknown> {
    return this.http
      .post(this.BASEURL + url, body)
      .pipe(catchError(this.errorHandler));
  }

  put(url: string, body: unknown): Observable<unknown> {
    return this.http
      .put(this.BASEURL + url, body)
      .pipe(catchError(this.errorHandler));
  }

  delete(url: string): Observable<unknown> {
    return this.http
      .delete(this.BASEURL + url)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(
      new Error(error as unknown as string) as unknown as string
    );
  }
}
