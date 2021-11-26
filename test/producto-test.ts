export default class RegistrarProductoTest {
    constructor(
        public idCategoriaProducto: number,
        public nombre: string,
        public stock: number,
        public precioCompra: number,
        public precioVenta: number,
        public activo: boolean,
    ) {

    }
}