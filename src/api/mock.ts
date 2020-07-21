export const ABIERTA = 'Abierta';
export const CERRADA = 'Cerrada';

export type Status = typeof ABIERTA | typeof CERRADA;

export interface LoadsInterface {
  id: string;
  loadType: string;
  origin: string;
  destination: string;
  loadDate: Date;
  status: Status;
}

export const loads: LoadsInterface[] = [
  {
    id: '10',
    loadType: 'cajas',
    origin: 'Santiago de Chile',
    destination: 'Buenos Aires',
    loadDate: new Date(2020, 11, 17),
    status: 'Abierta',
  },
  {
    id: '30',
    loadType: 'palettes',
    origin: 'Asunción',
    destination: 'Buenos Aires',
    loadDate: new Date(2020, 10, 7),
    status: 'Abierta',
  },
  {
    id: '33',
    loadType: 'paquetes',
    origin: 'Sucre',
    destination: 'Buenos Aires',
    loadDate: new Date(2020, 8, 12),
    status: 'Cerrada',
  },
  {
    id: '41',
    loadType: 'bolsas',
    origin: 'Lima',
    destination: 'Buenos Aires',
    loadDate: new Date(2020, 8, 24),
    status: 'Cerrada',
  },
];
