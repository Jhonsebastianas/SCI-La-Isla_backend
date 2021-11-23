import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";

export interface TipoFormaPagoService {

    /**
     * Método encargado de registrar una forma de pago activa.
     * @param nombre nombre de la forma de pago a registrar.
     */
    insert(nombre: string): Promise<TipoFormaPagoEntity>;

    /**
     * Método encargado de recuperar una forma de pago por su PK.
     * @param idFormaPago identificador de la forma de pago.
     */
    findByPk(idFormaPago: number): Promise<TipoFormaPagoEntity>;

    /**
     * Método encargado de recuperar todas las formas de pago.
     */
    findAll(): Promise<Array<TipoFormaPagoEntity>>;
}