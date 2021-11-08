import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriaProductoEntity } from '@productos/models/entity/categoria.producto.entity';
import { CategoriaProductoServiceImpl } from '@productos/services/impl/categoria.producto.services.impl';

@Controller("categoria-producto")
export class CategoriaProductoController {
    constructor(private categoriaProductoService: CategoriaProductoServiceImpl) { }

    @Post("registrar")
    async registrarCategoriaProducto(@Body() categoriaProducto: CategoriaProductoEntity): Promise<CategoriaProductoEntity> {
        return this.categoriaProductoService.insert(categoriaProducto);
    }

    @Get("find-all")
    async findAllCategoriaProducto(): Promise<Array<CategoriaProductoEntity>> {
        return this.categoriaProductoService.findAll();
    }

    @Get("find-like/:nombre")
    async findLikeNombre(@Param('nombre') nombre: string): Promise<Array<CategoriaProductoEntity>> {
        return this.categoriaProductoService.findLikeNombre(nombre);
    }

}