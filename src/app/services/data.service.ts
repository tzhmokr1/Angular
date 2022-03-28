import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  // To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
  getAll(): Observable<any> {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource: Object): Observable<any> {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource: any): Observable<any> {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  deletePost(id: any): Observable<any> {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return throwError(new BadInput());
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
