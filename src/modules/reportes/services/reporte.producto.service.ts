import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";

export interface ReporteProductoService {

    /**
     * Método encargado de retornar los productos más vendidos
     * @param {FiltroGeneralDTO} filtros (opcional), nos indica si la consulta requiere un filtro adicional.
     */
    findMasVendidos(filtros?: FiltroGeneralDTO): Promise<Array<ProductoMasVendidoDTO>>;
}