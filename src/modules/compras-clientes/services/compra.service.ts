import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";

export interface CompraService {

    /**
     * Método para registrar una compra.
     * @param {CompraEntity} compra entidad compra.
     */
    insert(compra: CompraEntity): Promise<CompraEntity>;

    /**
     * Método para encontrar una compra por id.
     * @param {number} idCompra identificador PK, de la compra.
     */
    findByPk(idCompra: number): Promise<CompraEntity>;

}