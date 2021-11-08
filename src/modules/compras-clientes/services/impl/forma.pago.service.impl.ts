import { Activo } from '@commons/util/constantes';
import { FormaPagoEntity } from '@compras.clientes/models/entity/forma.pago.entity';
import { FormaPagoService } from '@compras.clientes/services/forma.pago.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class FormaPagoServiceImpl implements FormaPagoService {

    constructor(@InjectRepository(FormaPagoEntity)
    private formaPagoRepository: Repository<FormaPagoEntity>) { }

    async insert(nombre: string): Promise<FormaPagoEntity> {
        const formaPago = new FormaPagoEntity();
        formaPago.activo = Activo.SI;
        formaPago.nombre = nombre;

        return await this.formaPagoRepository.save(formaPago);
    }

    async findByPk(idFormaPago: number): Promise<FormaPagoEntity> {
        return await this.formaPagoRepository
            .createQueryBuilder("fopa")
            .where("fopa.id_forma_pago = :idFormaPago", { idFormaPago })
            .getOne();
    }

    async findAll(): Promise<FormaPagoEntity[]> {
        return await this.formaPagoRepository.find();
    }

}