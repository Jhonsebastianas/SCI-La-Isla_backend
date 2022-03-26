import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TipoCategoriaProductoManagerImpl } from '@productos/manager/impl/tipo.categoria.producto.manager.impl';
import { TipoCategoriaProductoEntity } from '@productos/models/entity/tipo.categoria.producto.entity';

@Controller("categoria-producto")
@ApiTags('Tipo categoria producto')
export class CategoriaProductoService {
    constructor(private tipoCategoriaProductoManager: TipoCategoriaProductoManagerImpl) { }

    @Post("registrar")
    async registrarCategoriaProducto(@Body() categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return this.tipoCategoriaProductoManager.registrarTipoCategoriaProducto(categoriaProducto);
    }

    @Get("find-all")
    async findAllCategoriaProducto(): Promise<Array<TipoCategoriaProductoEntity>> {
        return this.tipoCategoriaProductoManager.findAll();
    }

    @Get("find-like/:nombre")
    async findLikeNombre(@Param('nombre') nombre: string): Promise<Array<TipoCategoriaProductoEntity>> {
        return this.tipoCategoriaProductoManager.findLikeNombre(nombre);
    }

}