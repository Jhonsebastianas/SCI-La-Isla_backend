import { CompraPagoService } from "@compras.clientes/services/compra.pago.service";
import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class CompraPagoServiceImpl implements CompraPagoService {
    constructor(@InjectRepository(CompraPagoEntity)
    private compraPagoRepository: Repository<CompraPagoEntity>) { }

    async insert(compraPago: CompraPagoEntity): Promise<CompraPagoEntity> {
        return await this.compraPagoRepository.save(compraPago);
    }

    async findByPk(idCompraPago: number): Promise<CompraPagoEntity> {
        return await this.compraPagoRepository
            .createQueryBuilder("copa")
            .where("copa.id_compra_pago = :idCompraPago", { idCompraPago })
            .getOne();
    }

    async findByIdCompra(idCompra: number): Promise<CompraPagoEntity[]> {
        return await this.compraPagoRepository
            .createQueryBuilder("copa")
            .where("copa.id_compra = :idCompra", { idCompra })
            .getMany();
    }

}