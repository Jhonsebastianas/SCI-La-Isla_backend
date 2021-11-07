import { Body, Controller, Post } from '@nestjs/common';
import { CategoriaProductoEntity } from '../models/entity/categoria.producto.entity';
import { CategoriaProductoServiceImpl } from '../services/impl/categoria.producto.services.impl';

@Controller("categoria-producto")
export class CategoriaProductoController {
    constructor(private categoriaProductoService: CategoriaProductoServiceImpl) { }

    @Post("registrar")
    async registrarCategoriaProducto(@Body() categoriaProducto: CategoriaProductoEntity): Promise<CategoriaProductoEntity> {
        return this.categoriaProductoService.insert(categoriaProducto);
    }

}