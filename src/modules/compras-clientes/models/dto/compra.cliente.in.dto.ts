import { PagoCliente } from "./pago.cliente.dto";
import { ProductoCompraDTO } from "./producto.compra.dto";

export class CompraClienteInDTO {
    productos: Array<ProductoCompraDTO>;
    pagos: Array<PagoCliente>;
}