export interface CreateDoacaoDto {
  titulo: string;
  descricao: string;
  categoria: string;   
  quantidade?: number;
  municipio: string;
  bairro: string;
  fotos?: string[];
}
