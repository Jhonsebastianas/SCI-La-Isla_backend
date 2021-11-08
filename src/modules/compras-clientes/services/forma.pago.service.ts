import { FormaPagoEntity } from "@compras.clientes/models/entity/forma.pago.entity";

export interface FormaPagoService {

    /**
     * Método encargado de registrar una forma de pago activa.
     * @param nombre nombre de la forma de pago a registrar.
     */
    insert(nombre: string): Promise<FormaPagoEntity>;

    /**
     * Método encargado de recuperar una forma de pago por su PK.
     * @param idFormaPago identificador de la forma de pago.
     */
    findByPk(idFormaPago: number): Promise<FormaPagoEntity>;

    /**
     * Método encargado de recuperar todas las formas de pago.
     */
    findAll(): Promise<Array<FormaPagoEntity>>;
}