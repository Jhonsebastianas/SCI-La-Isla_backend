import { CompraDetalleEntity } from "@compras.clientes/models/entity/compra.detalle.entity";

export interface CompraDetalleService {

    /**
     * Método encargado de registrar el detalle de una compra.
     * @param {CompraDetalleEntity} compraDetalle  detalle de una compra.
     */
    insert(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity>;

    /**
     * Método encargado de retornar un Compra_detalle por PK.
     * @param {number} idCompraDetalle identificador PK de la tabla.
     */
    findByPk(idCompraDetalle: number): Promise<CompraDetalleEntity>;

    /**
     * Método encargado de recuperar los detalles de una compra.
     * @param {number} idCompra identificador FK del detalle de la compra.
     */
    findByIdCompra(idCompra: number): Promise<Array<CompraDetalleEntity>>;
}