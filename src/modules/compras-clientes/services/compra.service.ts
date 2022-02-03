import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";

/**
 * @createAt 08/11/2021, 11:30 p.m.
 * @author jhonsebastianas.com
 */
export interface CompraService {

    /**
     * Método para registrar una compra.
     * @param {CompraEntity} compra entidad compra.
     */
    insert(compra: CompraEntity): Promise<CompraEntity>;

    /**
     * Método para actualizar una compra.
     * @param {CompraEntity} compra entidad compra.
     */
    update(compra: CompraEntity): Promise<CompraEntity>;

    /**
     * Método para encontrar una compra por id.
     * @param {number} idCompra identificador PK, de la compra.
     */
    findByPk(idCompra: number): Promise<CompraEntity>;

    /**
     * Método para recuperar las compras y sus detalles
     * @ceateAt 03/02/2022, 02:46 p.m.
     */
    findAll(): Promise<Array<CompraEntity>>;

}