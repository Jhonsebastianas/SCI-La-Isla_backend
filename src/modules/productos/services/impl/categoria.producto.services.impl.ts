import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoriaProductoEntity } from "@productos/models/entity/categoria.producto.entity";
import { CategoriaProductoService } from "@productos/services/categoria.producto.services";


export class CategoriaProductoServiceImpl implements CategoriaProductoService {

    constructor(@InjectRepository(CategoriaProductoEntity)
    private categoriaProductoRepository: Repository<CategoriaProductoEntity>) { }

    async insert(categoriaProducto: CategoriaProductoEntity): Promise<CategoriaProductoEntity> {
        return await this.categoriaProductoRepository.save(categoriaProducto);
    }

    async update(categoriaProducto: CategoriaProductoEntity): Promise<CategoriaProductoEntity> {
        return await this.categoriaProductoRepository.save(categoriaProducto);
    }

    async findByPk(idCategoriaProducto: number): Promise<CategoriaProductoEntity> {
        return await this.categoriaProductoRepository.createQueryBuilder()
            .where(
                "idCategoriaProducto = :id", { "id": idCategoriaProducto }
            ).getOne();
    }

}