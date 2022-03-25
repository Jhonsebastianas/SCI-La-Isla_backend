import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Clientes
import { ClienteServiceImpl } from "@commons/services/impl/cliente.service.impl";
// Producto
import { ProductoServiceImpl } from "@productos/services/impl/producto.services.impl";
// Compra
import { CompraEntity } from "./models/entity/compra.entity";
import { CompraServiceImpl } from "./services/impl/compra.service";
import { CompraController } from "./controllers/compra.controller";
// Forma de pago
import { TipoFormaPagoEntity } from "./models/entity/tipo.forma.pago.entity";
import { FormaPagoServiceImpl } from "./services/impl/tipo.forma.pago.service.impl";
import { FormaPagoController } from "./controllers/tipo.forma.pago.controller";
// Compra pago
import { CompraPagoEntity } from "./models/entity/compra.pago.entity";
import { CompraPagoServiceImpl } from "./services/impl/compra.pago.service.impl";
// Compra detalle
import { CompraDetalleEntity } from "./models/entity/compra.detalle.entity";
import { CompraDetalleServiceImpl } from "./services/impl/compra.detalle.service.impl";
import { TipoFormaPagoDaoImpl } from "./dao/impl/tipo.forma.pago.dao.impl";
import { TipoFormaPagoManagerImpl } from "./manager/impl/tipo.forma.pago.manager.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([TipoFormaPagoEntity, CompraEntity, CompraPagoEntity, CompraDetalleEntity]),
    ],
    providers: [
        // Cliente
        ClienteServiceImpl,
        // Producto
        ProductoServiceImpl,
        // Compras
        FormaPagoServiceImpl, CompraDetalleServiceImpl, CompraPagoServiceImpl, CompraServiceImpl,
        TipoFormaPagoDaoImpl, TipoFormaPagoManagerImpl
    ],
    controllers: [FormaPagoController, CompraController],
    exports: [TypeOrmModule, TipoFormaPagoDaoImpl, TipoFormaPagoManagerImpl],
})

export class CompraClienteModule { }