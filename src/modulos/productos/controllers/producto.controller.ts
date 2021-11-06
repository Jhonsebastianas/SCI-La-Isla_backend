import { Body, Controller, Get, Module, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DetalleProductoOutDTO } from '../models/dto/detalle.producto.out.dto';
import { ProductoEntity } from '../models/entity/producto.entity';
import { ProductoServiceImpl } from '../services/impl/producto.services.impl';

@Controller("producto")
export class ProductoController {
    constructor(
        private productoService: ProductoServiceImpl) { }

    @Post("registrar")
    async registrarProducto(@Body() producto: ProductoEntity): Promise<ProductoEntity> {
        return this.productoService.insert(producto);
    }

    @Post("actualizar")
    async actualizarProducto(@Body() producto: ProductoEntity): Promise<ProductoEntity> {
        return this.productoService.update(producto);
    }

    @Get("detalle/:id")
    async findDetalleProductoById(@Param('id', ParseIntPipe) idProducto: number): Promise<DetalleProductoOutDTO> {
        return this.productoService.findDetalleProductoById(idProducto);
    }
}
