import { ClienteIdentificacionDTO } from "@commons/models/dto/cliente.identificacion.dto";
import { IdentificacionDTO } from "@commons/models/dto/identificacion.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { ClienteServiceImpl } from "@commons/services/impl/cliente.service.impl";
import { MagicNumber } from "@commons/util/constantes";
import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { PagoClienteDTO } from "@compras.clientes/models/dto/pago.cliente.dto";
import { ProductoCompraDTO } from "@compras.clientes/models/dto/producto.compra.dto";
import { ResumenComprasInDTO } from "@compras.clientes/models/dto/resumen.compras.in.dto";
import { CompraDetalleEntity } from "@compras.clientes/models/entity/compra.detalle.entity";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";
import { CompraDetalleServiceImpl } from "@compras.clientes/services/impl/compra.detalle.service.impl";
import { CompraPagoServiceImpl } from "@compras.clientes/services/impl/compra.pago.service.impl";
import { CompraServiceImpl } from "@compras.clientes/services/impl/compra.service";
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductoServiceImpl } from "@productos/services/impl/producto.services.impl";

@Controller("compra-cliente")
@ApiTags('Compras Cliente')
export class CompraController {
    constructor(
        private compraService: CompraServiceImpl,
        private compraDetalleService: CompraDetalleServiceImpl,
        private compraPagoService: CompraPagoServiceImpl,
        private clienteService: ClienteServiceImpl,
        private productoService: ProductoServiceImpl,
    ) { }

    @Post("registrar")
    async registrarCompraCliente(@Body() compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        // Consultamos al cliente
        const cliente = await this.clienteService.findByIdentificacion(compraCliente.cliente.idTipoDocumento, compraCliente.cliente.numeroDocumento);

        let compraEntity = new CompraEntity();
        compraEntity.fechaCompra = new Date();
        compraEntity.idEmpleado = MagicNumber.UNO;
        compraEntity.idCliente = cliente.idCliente;
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
            await this.productoService.updateStockProductoVendido(producto.idProducto, producto.cantidad);
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

    @Put("actualizar-compra/:idCompra")
    async actualizarCompraCliente(@Param('idCompra') idCompra: number, @Body() compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        const cliente: ClienteEntity = await this.clienteService.findByIdentificacion(compraCliente.cliente.idTipoDocumento, compraCliente.cliente.numeroDocumento);
        let compraEntity: CompraEntity = await this.compraService.findByPk(idCompra);
        compraEntity.idCliente = cliente.idCliente;
        compraEntity.valorTotal = compraCliente.productos
            .map(producto => producto.valorTotal)
            .reduce((total, valor) => total + valor, 0);
        compraEntity = await this.compraService.update(compraEntity);

        // Buscamos los detalles anteriores.
        let listaDetallesAnteriores: Array<CompraDetalleEntity> = await this.compraDetalleService.findByIdCompra(compraEntity.idCompra);
        // Actualizamos los stocks con los nuevos datos.
        listaDetallesAnteriores.forEach(async detalle => {
            await this.productoService.updateStockProductoDevuelto(detalle.idProducto, detalle.cantidad);
        });
        // Eliminamos la lista de detalles anteriores.
        await this.compraDetalleService.delete(listaDetallesAnteriores.map(detalles => detalles.idCompraDetalle));

        // Registramos los nuevos detalles para la compra.
        compraCliente.productos.forEach(async producto => {
            const compraDetalleEntity = new CompraDetalleEntity();
            compraDetalleEntity.idCompra = compraEntity.idCompra;
            compraDetalleEntity.cantidad = producto.cantidad;
            compraDetalleEntity.idProducto = producto.idProducto;
            compraDetalleEntity.valorTotal = producto.valorTotal;
            await this.compraDetalleService.insert(compraDetalleEntity);
            await this.productoService.updateStockProductoVendido(producto.idProducto, producto.cantidad);
        });

        // Buscamos las compra pagos y los eliminamos
        let listaCompraPagosAnteriores: Array<CompraPagoEntity> = await this.compraPagoService.findByIdCompra(compraEntity.idCompra);
        await this.compraPagoService.delete(listaCompraPagosAnteriores.map(pago => pago.idCompraPago));

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

    @Get(":idCompra")
    async findCompraClienteById(@Param('idCompra') idCompra: number): Promise<CompraClienteInDTO> {
        const compraEntity: CompraEntity = await this.compraService.findByPk(idCompra);
        const listaDetalles: Array<CompraDetalleEntity> = await this.compraDetalleService.findByIdCompra(idCompra);
        const listaCompraPagos: Array<CompraPagoEntity> = await this.compraPagoService.findByIdCompra(idCompra);
        const cliente = await this.clienteService.findByPk(compraEntity.idCliente);

        const compraClienteInDTO: CompraClienteInDTO = new CompraClienteInDTO();
        // Mapeamos el dto
        compraClienteInDTO.productos = listaDetalles.map(compraDetalleEntityToProductoCompraDto);
        compraClienteInDTO.pagos = listaCompraPagos.map(compraPagoEntityToPagoClienteDto);
        // Cliente
        compraClienteInDTO.cliente = new ClienteIdentificacionDTO();
        compraClienteInDTO.cliente.idTipoDocumento = cliente.idTipoIdentificacion;
        compraClienteInDTO.cliente.numeroDocumento = cliente.numeroIdentificacion;

        compraClienteInDTO.empleado = new IdentificacionDTO();
        compraClienteInDTO.empleado.idTipoDocumento = MagicNumber.UNO;
        compraClienteInDTO.empleado.numeroDocumento = cliente.numeroIdentificacion;

        function compraDetalleEntityToProductoCompraDto(detalle: CompraDetalleEntity) {
            const productoCompraDto = new ProductoCompraDTO();
            productoCompraDto.idProducto = detalle.idProducto;
            productoCompraDto.cantidad = detalle.cantidad;
            productoCompraDto.valorTotal = detalle.valorTotal;
            return productoCompraDto;
        }

        function compraPagoEntityToPagoClienteDto(pago: CompraPagoEntity) {
            const pagoClienteDto = new PagoClienteDTO();
            pagoClienteDto.idTipoFormaPago = pago.idTipoFormaPago;
            pagoClienteDto.numeroComprobante = pago.numeroComprobante;
            pagoClienteDto.valor = pago.valor;
            return pagoClienteDto;
        }

        return compraClienteInDTO;
    }

    @Post("resumen-compras")
    async findResumenCompras(@Body() resumenComprasInDTO: ResumenComprasInDTO) {
        
    }

}