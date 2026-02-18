import { EstadoGeral } from "./EstadoGeral";

export interface Bike {
  id: number;
  name: string;
  imagePath: string;
  estadoGeral: EstadoGeral;
  dataCriacao: string;
}