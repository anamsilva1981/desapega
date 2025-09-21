import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../../../core/services/http-wrapper.service';
import { CreateDoacaoDto, DoacaoResponseDto, UpdateDoacaoDto } from '../models/doacao.dto';

@Injectable({
  providedIn: 'root'
})
export class DoacoesService {

  constructor(private httpWrapper: HttpWrapperService) {}

  // GET all
  getAll(params?: Record<string, any>): Observable<DoacaoResponseDto[]> {
    return this.httpWrapper.get<DoacaoResponseDto[]>('doacoes', params);
  }

  // GET by id
  getById(id: number): Observable<DoacaoResponseDto> {
    return this.httpWrapper.get<DoacaoResponseDto>(`doacoes/${id}`);
  }

  // POST create
  create(dto: CreateDoacaoDto): Observable<DoacaoResponseDto> {
    return this.httpWrapper.post<DoacaoResponseDto>('doacoes', dto);
  }

  // PUT update
  update(id: number, dto: UpdateDoacaoDto): Observable<DoacaoResponseDto> {
    return this.httpWrapper.put<DoacaoResponseDto>(`doacoes/${id}`, dto);
  }

  // DELETE
  delete(id: number): Observable<void> {
    return this.httpWrapper.delete<void>(`doacoes/${id}`);
  }
}
