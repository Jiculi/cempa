export default interface Producto {
  id: number;
  attributes: {
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}