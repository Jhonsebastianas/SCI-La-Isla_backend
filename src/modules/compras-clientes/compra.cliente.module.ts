import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Forma de pago
import { FormaPagoEntity } from "./models/entity/forma.pago.entity";
import { FormaPagoServiceImpl } from "./services/impl/forma.pago.service.impl";
import { FormaPagoController } from "./controllers/forma.pago.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([FormaPagoEntity]),
    ],
    providers: [FormaPagoServiceImpl],
    controllers: [FormaPagoController],
    exports: [TypeOrmModule],
})

export class CompraClienteModule { }