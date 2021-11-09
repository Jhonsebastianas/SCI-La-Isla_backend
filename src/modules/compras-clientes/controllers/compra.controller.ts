import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { CompraServiceImpl } from "@compras.clientes/services/impl/compra.service";
import { Body, Controller } from "@nestjs/common";

@Controller("compra")
export class CompraController {
    constructor(
        private compraService: CompraServiceImpl
    ) { }

    async registrarCompraCliente(@Body() compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        const compraEntity = new CompraEntity();
        return null;
    }

}