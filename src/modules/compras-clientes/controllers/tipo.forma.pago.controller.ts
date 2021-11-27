import { TipoFormaPagoDTO } from "@compras.clientes/models/dto/tipo.forma.pago.in.dto";
import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";
import { FormaPagoServiceImpl } from "@compras.clientes/services/impl/tipo.forma.pago.service.impl";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("forma-pago")
@ApiTags('Formas de pago')
export class FormaPagoController {
    constructor(private formaPagoService: FormaPagoServiceImpl) { }

    @Post("registrar")
    async registrarFormaPago(@Body() tipoFormaPago: TipoFormaPagoDTO): Promise<TipoFormaPagoEntity> {
        return this.formaPagoService.insert(tipoFormaPago.nombre);
    }

    @Get("find-all")
    async findAll(): Promise<Array<TipoFormaPagoEntity>> {
        return this.formaPagoService.findAll();
    }

}