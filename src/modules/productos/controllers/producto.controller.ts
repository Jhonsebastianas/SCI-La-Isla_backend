import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DetalleProductoOutDTO } from '@productos/models/dto/detalle.producto.out.dto';
import { ProductoEntity } from '@productos/models/entity/producto.entity';
import { ProductoServiceImpl } from '@productos/services/impl/producto.services.impl';
@Controller("productos")
@ApiTags('Producto')
export class ProductoController {
    constructor(
        private productoService: ProductoServiceImpl) { }

    @Post("registrar")
    @ApiOperation({ description: 'Crear un producto nuevo' })
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

    @Get("detalle/find-like/:nombre")
    async findLikeNombre(@Param('nombre') nombre: string): Promise<Array<DetalleProductoOutDTO>> {
        return this.productoService.findDetalleProductoLikeNombre(nombre);
    }
}
