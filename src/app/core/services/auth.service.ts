import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Observable, tap } from 'rxjs';

export  interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  nome: string;
  email: string;
  password: string;
  telefone?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    nome: string;
    email: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly endpoint = 'auth';
  private readonly tokenKey = 'auth_token';

  constructor(
    private httpWrapper: HttpWrapperService
  ) { }

   // LOGIN
  login(dto: LoginDto): Observable<AuthResponse> {
    return this.httpWrapper.post<AuthResponse>(`${this.endpoint}/login`, dto).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  // REGISTER
  register(dto: RegisterDto): Observable<AuthResponse> {
    return this.httpWrapper.post<AuthResponse>(`${this.endpoint}/register`, dto).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  // ⚡ Retorna true se houver token salvo
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
  // LOGOUT
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // PEGAR TOKEN
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // CHECAR SE ESTÁ AUTENTICADO
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}
