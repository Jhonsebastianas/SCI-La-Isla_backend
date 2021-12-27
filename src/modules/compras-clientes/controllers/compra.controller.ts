import { MagicNumber } from "@commons/util/constantes";
import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { CompraDetalleEntity } from "@compras.clientes/models/entity/compra.detalle.entity";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";
import { CompraDetalleServiceImpl } from "@compras.clientes/services/impl/compra.detalle.service.impl";
import { CompraPagoServiceImpl } from "@compras.clientes/services/impl/compra.pago.service.impl";
import { CompraServiceImpl } from "@compras.clientes/services/impl/compra.service";
import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("compra")
@ApiTags('Compras')
export class CompraController {
    constructor(
        private compraService: CompraServiceImpl,
        private compraDetalleService: CompraDetalleServiceImpl,
        private compraPagoService: CompraPagoServiceImpl,
    ) { }

    @Post("registrar")
    async registrarCompraCliente(@Body() compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        let compraEntity = new CompraEntity();
        compraEntity.fechaCompra = new Date();
        compraEntity.idEmpleado = MagicNumber.UNO;
        compraEntity.idCliente = MagicNumber.UNO;
        compraEntity.valorTotal = compraCliente.productos
            .map(producto => producto.valorTotal)
            .reduce((total, valor) => total + valor, 0);
        compraEntity = await this.compraService.insert(compraEntity);

        compraCliente.productos.forEach(async producto => {
            const compraDetalleEntity = new CompraDetalleEntity();
            compraDetalleEntity.idCompra = compraEntity.idCompra;
            compraDetalleEntity.cantidad = producto.cantidad;
            compraDetalleEntity.idProducto = producto.idProducto;
            compraDetalleEntity.valorTotal = producto.valorTotal;
            await this.compraDetalleService.insert(compraDetalleEntity);
        });

        compraCliente.pagos.forEach(async pago => {
            const compraPago = new CompraPagoEntity();
            compraPago.idCompra = compraEntity.idCompra;
            compraPago.idTipoFormaPago = pago.idTipoFormaPago;
            compraPago.numeroComprobante = pago.numeroComprobante;
            compraPago.valor = pago.valor;
            await this.compraPagoService.insert(compraPago);
        });

        return compraCliente;
    }

}