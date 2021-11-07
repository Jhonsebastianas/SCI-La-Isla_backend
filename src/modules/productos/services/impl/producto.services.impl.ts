import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { MagicNumber } from "src/modules/common/util/constantes";
import { EntityManager } from "typeorm";
import { DetalleProductoOutDTO } from "../../models/dto/detalle.producto.out.dto";
import { ProductoEntity } from "../../models/entity/producto.entity";
import { ProductoService } from "../producto.services";

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
                cpro.nombre AS "categoria"
            FROM producto pro
            INNER JOIN categoria_producto cpro ON pro.id_categoria_producto = cpro.id_categoria_producto
            WHERE pro.id_producto = :idProducto
        `, [idProducto]).then((detalles => detalles[MagicNumber.CERO]));
        if (!detalle) {
            throw new HttpException({ mensaje: `El producto con identificación ${idProducto} no existe`, status: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST);
        }
        return detalle;
    }

}