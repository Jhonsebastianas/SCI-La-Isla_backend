import { Activo } from '@commons/util/constantes';
import { TipoFormaPagoEntity } from '@compras.clientes/models/entity/tipo.forma.pago.entity';
import { TipoFormaPagoService } from '@compras.clientes/services/tipo.forma.pago.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class FormaPagoServiceImpl implements TipoFormaPagoService {

    constructor(@InjectRepository(TipoFormaPagoEntity)
    private formaPagoRepository: Repository<TipoFormaPagoEntity>) { }

    async insert(nombre: string): Promise<TipoFormaPagoEntity> {
        const formaPago = new TipoFormaPagoEntity();
        formaPago.activo = Activo.SI;
        formaPago.nombre = nombre;

        return await this.formaPagoRepository.save(formaPago);
    }

    async findByPk(idFormaPago: number): Promise<TipoFormaPagoEntity> {
        return await this.formaPagoRepository
            .createQueryBuilder("fopa")
            .where("fopa.id_forma_pago = :idFormaPago", { idFormaPago })
            .getOne();
    }

    async findAll(): Promise<TipoFormaPagoEntity[]> {
        return await this.formaPagoRepository.find();
    }

}