import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Forma de pago
import { TipoFormaPagoEntity } from "./models/entity/tipo.forma.pago.entity";
import { FormaPagoServiceImpl } from "./services/impl/tipo.forma.pago.service.impl";
import { FormaPagoController } from "./controllers/tipo.forma.pago.controller";
// Compra pago
import { CompraPagoEntity } from "./models/entity/compra.pago.entity";
import { CompraPagoServiceImpl } from "./services/impl/compra.pago.service.impl";
// Compra detalle
import { CompraDetalleEntity } from "./models/entity/compra.detalle.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([TipoFormaPagoEntity, CompraPagoEntity, CompraDetalleEntity]),
    ],
    providers: [FormaPagoServiceImpl, CompraPagoServiceImpl],
    controllers: [FormaPagoController],
    exports: [TypeOrmModule],
})

export class CompraClienteModule { }