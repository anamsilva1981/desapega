export interface CreateUserDto {
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
}

export interface UserResponseDto {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
    criadoEm?: string;
}
