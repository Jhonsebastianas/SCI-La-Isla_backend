import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TipoCategoriaProductoEntity } from '@productos/models/entity/tipo.categoria.producto.entity';
import { CategoriaProductoServiceImpl } from '@productos/services/impl/categoria.producto.services.impl';

@Controller("categoria-producto")
export class CategoriaProductoController {
    constructor(private categoriaProductoService: CategoriaProductoServiceImpl) { }

    @Post("registrar")
    async registrarCategoriaProducto(@Body() categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return this.categoriaProductoService.insert(categoriaProducto);
    }

    @Get("find-all")
    async findAllCategoriaProducto(): Promise<Array<TipoCategoriaProductoEntity>> {
        return this.categoriaProductoService.findAll();
    }

    @Get("find-like/:nombre")
    async findLikeNombre(@Param('nombre') nombre: string): Promise<Array<TipoCategoriaProductoEntity>> {
        return this.categoriaProductoService.findLikeNombre(nombre);
    }

}