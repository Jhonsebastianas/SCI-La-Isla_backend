import { CompraService } from "@compras.clientes/services/compra.service";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NoResultException } from "@config/exceptions/maganer.exception";

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
        const compraEntity = await this.compraRepository
            .createQueryBuilder("compra")
            .where("compra.ID_COMPRA = :idCompra", { idCompra })
            .getOne();
        if (!compraEntity) {
            throw new NoResultException(`No se pudo encontrar la compra con id: ${idCompra}`);
        }
        return compraEntity;
    }

    async findAll(): Promise<CompraEntity[]> {
        const listaCompras = await this.compraRepository
            .createQueryBuilder("compra")
            .orderBy('compra.idCompra', 'DESC')
            .getMany();
        if (!listaCompras) {
            throw new NoResultException(`No se encontraron compras registradas`);
        }
        return listaCompras;
    }

}