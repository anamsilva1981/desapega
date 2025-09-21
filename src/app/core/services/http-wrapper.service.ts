// src/app/core/services/http-wrapper.service.ts
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEvent
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  private readonly apiUrl = environment.apiUrl;
  private readonly defaultJsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  private buildHeaders(custom?: Record<string, string>): HttpHeaders {
    let headers = this.defaultJsonHeaders;
    if (!custom) return headers;
    Object.keys(custom).forEach((k) => {
      headers = headers.set(k, String(custom[k]));
    });
    return headers;
  }

  private buildParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();
    if (!params) return httpParams;
    Object.keys(params).forEach((k) => {
      const val = params[k];
      if (val !== undefined && val !== null) {
        httpParams = httpParams.set(k, String(val));
      }
    });
    return httpParams;
  }

  private handleError(err: any) {
    // Normaliza e centraliza o erro (pode evoluir para um logger)
    console.error('[HttpWrapper] error ->', err);
    let message = 'Erro desconhecido';
    if (err?.error?.message) message = err.error.message;
    else if (err?.message) message = err.message;
    else if (err?.status) message = `Erro ${err.status} - ${err.statusText || ''}`;
    return throwError(() => new Error(message));
  }

  // GET com suporte a params e headers custom
  get<T>(endpoint: string, params?: Record<string, any>, headers?: Record<string, string>): Observable<T> {
    const options = {
      headers: this.buildHeaders(headers),
      params: this.buildParams(params)
    };
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  post<T>(endpoint: string, body: any, headers?: Record<string, string>): Observable<T> {
    const options = { headers: this.buildHeaders(headers) };
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body, options).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  put<T>(endpoint: string, body: any, headers?: Record<string, string>): Observable<T> {
    const options = { headers: this.buildHeaders(headers) };
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body, options).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  delete<T>(endpoint: string, params?: Record<string, any>, headers?: Record<string, string>): Observable<T> {
    const options = {
      headers: this.buildHeaders(headers),
      params: this.buildParams(params)
    };
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Para upload de imagens/arquivos (observe events para progress)
  postFormData<T = any>(endpoint: string, formData: FormData, reportProgress = false): Observable<HttpEvent<T>> {
    // NÃO setar Content-Type para FormData (o browser define)
    const headers = new HttpHeaders();
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, formData, {
      headers,
      reportProgress,
      observe: 'events'
    }).pipe(catchError(this.handleError.bind(this)));
  }
}
