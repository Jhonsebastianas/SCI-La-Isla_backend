import { ClienteIdentificacionDTO } from "@commons/models/dto/cliente.identificacion.dto";
import { PagoClienteDTO } from "./pago.cliente.dto";
import { ProductoCompraDTO } from "./producto.compra.dto";

export class CompraClienteInDTO {
    productos: Array<ProductoCompraDTO>;
    pagos: Array<PagoClienteDTO>;
    cliente: Array<ClienteIdentificacionDTO>;
}