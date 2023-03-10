export interface Endereco {
  id: string,
  idCliente: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  idCidade: string;
  nomeRecebedor: string;
  ehEnderecoPadrao: boolean;
}

