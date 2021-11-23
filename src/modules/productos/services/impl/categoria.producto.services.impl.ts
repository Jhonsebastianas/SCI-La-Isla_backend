import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TipoCategoriaProductoEntity } from "@productos/models/entity/tipo.categoria.producto.entity";
import { TipoCategoriaProductoService } from "@productos/services/tipo.categoria.producto.services";

export class CategoriaProductoServiceImpl implements TipoCategoriaProductoService {

    constructor(@InjectRepository(TipoCategoriaProductoEntity)
    private categoriaProductoRepository: Repository<TipoCategoriaProductoEntity>) { }

    async insert(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return await this.categoriaProductoRepository.save(categoriaProducto);
    }

    async update(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return await this.categoriaProductoRepository.save(categoriaProducto);
    }

    async findByPk(idCategoriaProducto: number): Promise<TipoCategoriaProductoEntity> {
        return await this.categoriaProductoRepository.createQueryBuilder()
            .where(
                "idCategoriaProducto = :id", { "id": idCategoriaProducto }
            ).getOne();
    }

    async findAll(): Promise<TipoCategoriaProductoEntity[]> {
        return await this.categoriaProductoRepository.find();
    }

    async findLikeNombre(nombre: string): Promise<TipoCategoriaProductoEntity[]> {
        return await this.categoriaProductoRepository
            .createQueryBuilder("categoria")
            .where("categoria.nombre LIKE :nombre", { nombre: `%${nombre}%` })
            .getMany();
    }

}