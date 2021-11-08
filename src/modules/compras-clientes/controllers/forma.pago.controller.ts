import { FormaPagoEntity } from "@compras.clientes/models/entity/forma.pago.entity";
import { FormaPagoServiceImpl } from "@compras.clientes/services/impl/forma.pago.service.impl";
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("forma-pago")
export class FormaPagoController {
    constructor(private formaPagoService: FormaPagoServiceImpl) { }

    @Post("registrar")
    async registrarFormaPago(@Body() nombreFormaPago: string): Promise<FormaPagoEntity> {
        return this.formaPagoService.insert(nombreFormaPago);
    }

    @Get("find-all")
    async findAll(): Promise<Array<FormaPagoEntity>> {
        return this.formaPagoService.findAll();
    }

}