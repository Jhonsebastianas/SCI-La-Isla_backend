import { ClienteInDTO } from "@commons/models/dto/cliente.in.dto";
import { ResponseDTO } from "@commons/models/dto/response.dto";
import { ClienteServiceImpl } from "@commons/services/impl/cliente.service.impl";
import { Body, Controller, Get, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("cliente")
@ApiTags('cliente')
export class ClienteController {
    constructor(
        private clienteService: ClienteServiceImpl
    ) { }

    @Put("registrar")
    @ApiOperation({ description: 'Registrar un nuevo cliente' })
    @UsePipes(new ValidationPipe({ transform: true }))
    async registrarCliente(@Body() cliente: ClienteInDTO): Promise<ResponseDTO> {
        return await this.clienteService.registrarCliente(cliente);
    }

    @Get("findByIdentificacion")
    @ApiOperation({ description: 'Método encargado de retornar un cliente consultado, por medio de su identificación' })
    @UsePipes(new ValidationPipe({ transform: true }))
    async findByIdentificacion() {

    }
}