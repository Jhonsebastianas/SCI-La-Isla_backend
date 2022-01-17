import { CompraDetalleEntity } from '@compras.clientes/models/entity/compra.detalle.entity';
import { CompraDetalleService } from '@compras.clientes/services/compra.detalle.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class CompraDetalleServiceImpl implements CompraDetalleService {

    constructor(@InjectRepository(CompraDetalleEntity)
    private repository: Repository<CompraDetalleEntity>) { }

    async insert(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity> {
        return await this.repository.save(compraDetalle);
    }

    async update(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity> {
        return await this.repository.save(compraDetalle);
    }

    async delete(idsCompraDetalle: number | Array<number>): Promise<void> {
        await this.repository.delete(idsCompraDetalle);
    }

    async findByPk(idCompraDetalle: number): Promise<CompraDetalleEntity> {
        return await this.repository
            .createQueryBuilder("code")
            .where("code.id_compra_detalle = :idCompraDetalle", { idCompraDetalle })
            .getOne();
    }

    async findByIdCompra(idCompra: number): Promise<CompraDetalleEntity[]> {
        return await this.repository
            .createQueryBuilder("code")
            .where("code.ID_COMPRA = :idCompra", { idCompra })
            .getMany();
    }

}