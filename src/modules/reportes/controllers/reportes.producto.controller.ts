import { ParamException } from "@config/exceptions/maganer.exception";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";
import { ReporteProductoServiceImpl } from "@reportes/services/impl/reporte.producto.service.impl";

@Controller("reportes-productos")
@ApiTags('Reportes de productos')
export class ReporteProductoController {

    constructor(
        private reporteServices: ReporteProductoServiceImpl
    ) { }

    @Post("findMasVendidos")
    @ApiOperation({ description: 'Retorna los productos más vendidos' })
    async findMasVendidos(@Body() filtros?: FiltroGeneralDTO): Promise<Array<ProductoMasVendidoDTO>> {
        filtros = filtros || new FiltroGeneralDTO();
        return this.reporteServices.findMasVendidos(filtros);
    }

    @Post("estadisticas-producto")
    @ApiOperation({ description: 'Retorna la información detallada de un producto y sus estadísticas' })
    async findDetalleCompletoProducto(@Body() filtros?: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO> {
        if (!filtros?.idProducto) {
            throw new ParamException("Debe especificar mínimo el id del producto a consultar");
        }
        return this.reporteServices.findEstadisticasProducto(filtros);
    }

}