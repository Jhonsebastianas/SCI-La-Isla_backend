import { ClienteInDTO } from "@commons/models/dto/cliente.in.dto";
import { ResponseDTO } from "@commons/models/dto/response.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";

export interface ClienteService {

    /**
     * Permite registrar un cliente nuevo en el sistema.
     * @param {ClienteEntity} cliente 
     */
    insert(cliente: ClienteEntity): Promise<ClienteEntity>;

    /**
     * Método encargado de registrar un nuevo cliente.
     * @param {ClienteInDTO} cliente 
     */
    registrarCliente(cliente: ClienteInDTO): Promise<ResponseDTO>;
}