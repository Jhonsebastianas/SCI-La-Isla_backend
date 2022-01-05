import { MagicNumber } from '@commons/util/constantes';
import { NoResultException } from "@config/exceptions/maganer.exception";
import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { DetalleProductoOutDTO } from "@productos/models/dto/detalle.producto.out.dto";
import { ProductoEntity } from "@productos/models/entity/producto.entity";
import { ProductoService } from "@productos/services/producto.services";
import { EntityManager } from "typeorm";

/**
 * Servicio encargado de la lógica de negocio y capa de datos.
 */
export class ProductoServiceImpl implements ProductoService {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(producto: ProductoEntity): Promise<ProductoEntity> {
        const newProduct = new ProductoEntity();
        Object.assign(newProduct, producto);

        return await this.entityManager.save(newProduct);
    }

    async update(producto: ProductoEntity): Promise<ProductoEntity> {
        return await this.entityManager.save(producto);
    }

    async findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO> {
        const detalle: DetalleProductoOutDTO = await this.entityManager.query(`
            SELECT 
                pro.nombre AS "nombreProducto", pro.stock AS "stock",
                pro.precio_compra AS "precioCompra", pro.precio_venta AS "precioVenta",
                tcp.nombre AS "categoria"
            FROM producto pro
            INNER JOIN tipo_categoria_producto tcp ON pro.id_tipo_categoria_producto = tcp.id_tipo_categoria_producto
            WHERE pro.id_producto = :idProducto
        `, [idProducto]).then((detalles => detalles[MagicNumber.CERO]));
        if (!detalle) {
            throw new NoResultException(`El producto con identificación ${idProducto} no existe`);
        }
        return detalle;
    }

    async findDetalleProductoLikeNombre(nombre: string): Promise<DetalleProductoOutDTO[]> {
        const detalle: Array<DetalleProductoOutDTO> = await this.entityManager.query(`
            SELECT 
                pro.nombre AS "nombreProducto", pro.stock AS "stock",
                pro.precio_compra AS "precioCompra", pro.precio_venta AS "precioVenta",
                cpro.nombre AS "categoria"
            FROM producto pro
            INNER JOIN tipo_categoria_producto cpro ON pro.id_tipo_categoria_producto = cpro.id_tipo_categoria_producto
            WHERE pro.nombre LIKE :nombre
        `, [`%${nombre}%`]);
        if (detalle.length < 1) {
            throw new NoResultException(`El producto con nombre parcial ${nombre} no existe`);
        }
        return detalle;
    }

}