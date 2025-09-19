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
