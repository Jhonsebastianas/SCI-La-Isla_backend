import { ClienteInDTO } from "@commons/models/dto/cliente.in.dto";
import { ResponseDTO } from "@commons/models/dto/response.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { Activo, Datos } from "@commons/util/constantes";
import { HttpStatus } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { ClienteService } from "../cliente.services";

export class ClienteServiceImpl implements ClienteService {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(cliente: ClienteEntity): Promise<ClienteEntity> {
        return await this.entityManager.save(cliente);
    }

    async registrarCliente(cliente: ClienteInDTO): Promise<ResponseDTO> {
        const clienteEntity = new ClienteEntity();
        clienteEntity.idTipoIdentificacion = cliente.identificacion.idTipoDocumento;
        clienteEntity.numeroIdentificacion = cliente.identificacion.numeroDocumento;
        clienteEntity.primerNombre = cliente.primerNombre;
        clienteEntity.segundoNombre = cliente.segundoNombre;
        clienteEntity.primerApellido = cliente.primerApellido;
        clienteEntity.segundoApellido = cliente.segundoApellido;
        clienteEntity.direccion = cliente.direccion || Datos.NO_REGISTRA;
        clienteEntity.correo = cliente.correo || Datos.NO_REGISTRA;
        clienteEntity.telefono = cliente.telefono || Datos.NO_REGISTRA;
        clienteEntity.activo = Activo.SI;
        await this.insert(clienteEntity);
        return new ResponseDTO(HttpStatus.OK, 'El cliente fue registrado exitosamente');
    }

    async findByIdentificacion(tipoIdentificacion: number, numeroIdentificacion: string): Promise<ClienteEntity> {
        //https://typeorm.io/#/select-query-builder/how-to-create-and-use-a-querybuilder
        const cliente = await this.entityManager.createQueryBuilder()
            .select("cliente")
            .from(ClienteEntity, "cliente")
            .where(`
                cliente.ID_TIPO_IDENTIFICACION = :tipoIdentificacion 
                AND cliente.NUMERO_IDENTIFICACION = :numeroIdentificacion
                `, { tipoIdentificacion, numeroIdentificacion })
            .getOne();
        return cliente;
    }

}