import { TipoCategoriaProductoEntity } from "@productos/models/entity/tipo.categoria.producto.entity";

export interface TipoCategoriaProductoService {

    /**
     * Método encargado de registrar una categoría de producto.
     * @param {TipoCategoriaProductoEntity} categoriaProducto 
     */
    insert(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity>;

    /**
     * Método encargado de actualizar una categoría de producto.
     * @param {TipoCategoriaProductoEntity} categoriaProducto 
     */
    update(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity>;

    /**
     * Método encargado de encontrar una categoría de producto por la PK.
     * @param {number} idCategoriaProducto 
     */
    findByPk(idCategoriaProducto: number): Promise<TipoCategoriaProductoEntity>;

    /**
     * Retorna todas las categorias de los productos.
     */
    findAll(): Promise<Array<TipoCategoriaProductoEntity>>;

    /**
     * Método para buscar una lista de elementos por su nombre.
     * @param nombre parte del nombre a buscar en la tabla categoria_producto
     */
    findLikeNombre(nombre: string): Promise<Array<TipoCategoriaProductoEntity>>;
}