import { DetalleProductoOutDTO } from '@productos/models/dto/detalle.producto.out.dto';
import { ProductoEntity } from '@productos/models/entity/producto.entity';

export interface ProductoService {

    /**
     * Método encargado de registrar un nuevo producto.
     * @param {ProductoEntity} producto.
     */
    insert(producto: ProductoEntity): Promise<ProductoEntity>;

    /**
     * Método encargado de actualizar un producto.
     * @param {ProductoEntity} producto 
     */
    update(producto: ProductoEntity): Promise<ProductoEntity>;

    /**
     * Método para retornar el detalle de un producto.
     * @param {number} idProducto 
     */
    findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO>;
}