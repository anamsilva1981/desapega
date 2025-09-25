import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, RouterModule]
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });

  onSubmit() {
    if (this.registerForm.invalid) return;

    const { nome, email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('As senhas não conferem!');
      return;
    }

    this.authService.register({ nome: nome!, email: email!, password: password! }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err: any) => console.error('Erro ao registrar:', err)
    });
  }
}
