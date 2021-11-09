import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Forma de pago
import { FormaPagoEntity } from "./models/entity/forma.pago.entity";
import { FormaPagoServiceImpl } from "./services/impl/forma.pago.service.impl";
import { FormaPagoController } from "./controllers/forma.pago.controller";
// Compra pago
import { CompraPagoEntity } from "./models/entity/compra.pago.entity";
import { CompraPagoServiceImpl } from "./services/impl/compra.pago.service.impl";
// Compra detalle
import { CompraDetalleEntity } from "./models/entity/compra.detalle.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([FormaPagoEntity, CompraPagoEntity, CompraDetalleEntity]),
    ],
    providers: [FormaPagoServiceImpl, CompraPagoServiceImpl],
    controllers: [FormaPagoController],
    exports: [TypeOrmModule],
})

export class CompraClienteModule { }