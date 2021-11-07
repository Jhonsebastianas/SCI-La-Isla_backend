import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DetalleProductoOutDTO } from "../../models/dto/detalle.producto.out.dto";
import { ProductoEntity } from "../../models/entity/producto.entity";
import { ProductoService } from "../producto.services";

/**
 * Servicio encargado de la lógica de negocio y capa de datos.
 */
export class ProductoServiceImpl implements ProductoService {

    constructor(@InjectRepository(ProductoEntity)
    private productoRepository: Repository<ProductoEntity>) { }

    async insert(producto: ProductoEntity): Promise<ProductoEntity> {
        return await this.productoRepository.save(producto);
    }

    async update(producto: ProductoEntity): Promise<ProductoEntity> {
        return await this.productoRepository.save(producto);
    }

    async findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO> {
        const detalle: DetalleProductoOutDTO = await this.productoRepository.createQueryBuilder().where(
            "id_producto = :id", { "id": idProducto }
        ).getOne();
        if (!detalle) {
            throw new HttpException({ mensaje: `El producto con identificación ${idProducto} no existe`, status: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST);
        }
        return detalle;
    }

}