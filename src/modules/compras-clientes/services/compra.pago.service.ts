import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";

export interface CompraPagoService {

    /**
     * Método encargado de registrar en la tabla compra_pago.
     * @param compraPago entity de compra_pago a registrar.
     */
    insert(compraPago: CompraPagoEntity): Promise<CompraPagoEntity>;

    /**
     * Método encargado de eliminar una o varias compra pago.
     * @createAt 2022/01/16 09:30 p.m.
     * @param {number | Array<number>} idsCompraPago 
     */
    delete(idsCompraPago: number | Array<number>): Promise<void>;

    /**
     * Método encargado de retornar una compra_pago por medio de la PK.
     * @param idCompraPago identificador (PK) de la tabla compra_pago.
     */
    findByPk(idCompraPago: number): Promise<CompraPagoEntity>;

    /**
     * Método encargado de retornar los pagos de las compras por idCompra (FK).
     * @param idCompra identificador (FK) de la compra.
     */
    findByIdCompra(idCompra: number): Promise<Array<CompraPagoEntity>>;
}