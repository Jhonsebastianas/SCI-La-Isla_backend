import { CompraService } from "@compras.clientes/services/compra.service";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class CompraServiceImpl implements CompraService {
    constructor(@InjectRepository(CompraEntity)
    private compraRepository: Repository<CompraEntity>) { }

    async insert(compra: CompraEntity): Promise<CompraEntity> {
        return await this.compraRepository.save(compra);
    }

    async update(compra: CompraEntity): Promise<CompraEntity> {
        return await this.compraRepository.save(compra);
    }

    async findByPk(idCompra: number): Promise<CompraEntity> {
        return await this.compraRepository
            .createQueryBuilder("compra")
            .where("compra.ID_COMPRA = :idCompra", { idCompra })
            .getOne();
    }

}