export interface AlumnosUtl {
    id:number
    nombre:string;
    stock:number;
    ancho:number;
    altura:number;
    total:number;
    largo:number;

  }

  export interface Pedido {
    cantidad:number
    Totalprecio:number
    estatusPedido:number
    producto_id:number
    user_id:number
    fechaRealizado:Date

  }

  export interface Country {
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
  }
  