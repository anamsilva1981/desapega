export interface CreateDoacaoDto {
  titulo: string;
  descricao: string;
  categoria: string;   
  quantidade?: number;
  municipio: string;
  bairro: string;
  fotos?: string[];
}


export interface DoacaoResponseDto {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  quantidade?: number;
  municipio: string;
  bairro: string;
  fotos?: string[];
  criadoEm: string;
  atualizadoEm?: string;
}


export interface UpdateDoacaoDto {
  titulo?: string;
  descricao?: string;
  categoria?: string;
  quantidade?: number;
  municipio?: string;
  bairro?: string;
  fotos?: string[];
}
