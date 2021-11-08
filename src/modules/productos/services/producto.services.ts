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
     * Método para retornar el detalle de un producto por el identificador (PK).
     * @param {number} idProducto 
     */
    findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO>;

    /**
     * Método encargado de retornar la lista de procutos que coincidan con el nombre del producto.
     * @param {string} nombre nombre parcial del producto.
     */
    findDetalleProductoLikeNombre(nombre: string): Promise<Array<DetalleProductoOutDTO>>;
}