/**
 * DTO encargado de los productos más vendidos.
 */
export class ProductoMasVendidoDTO {
    idProducto: number;
    idTipoCategoriaProducto: number;
    cantidadCompras: number;
    nombre: string;
    valorTotalCompras: number;
}