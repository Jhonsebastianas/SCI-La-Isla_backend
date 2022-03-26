import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { CompraDao } from "../compra.dao";

/**
 * Clase encargada de la capa de datos de las compras <br>
 * @createAt 2022-03-24, 23:56:14
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export class CompraDaoImpl implements CompraDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }


    async insert(compra: CompraEntity): Promise<CompraEntity> {
        return await this.entityManager.save(compra);
    }

    async update(compra: CompraEntity): Promise<CompraEntity> {
        return await this.entityManager.save(compra);
    }

    async delete(idsCompra: number | number[]): Promise<void> {
        await this.entityManager.delete(CompraEntity, idsCompra);
    }

    async findByPk(idCompra: number): Promise<CompraEntity> {
        return await this.entityManager.findOne<CompraEntity>(CompraEntity, idCompra);
    }

    async findAll(): Promise<CompraEntity[]> {
        return await this.entityManager.find(CompraEntity, {
            order: { idCompra: 'DESC' }
        });
    }

}