import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

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

@Module({
    imports: [
        TypeOrmModule.forFeature([TipoFormaPagoEntity, CompraEntity, CompraPagoEntity, CompraDetalleEntity]),
    ],
    providers: [FormaPagoServiceImpl, CompraDetalleServiceImpl, CompraPagoServiceImpl, CompraServiceImpl],
    controllers: [FormaPagoController, CompraController],
    exports: [TypeOrmModule],
})

export class CompraClienteModule { }