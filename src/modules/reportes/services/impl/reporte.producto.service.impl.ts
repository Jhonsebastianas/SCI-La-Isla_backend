import { InjectEntityManager } from "@nestjs/typeorm";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";
import { EntityManager } from "typeorm";
import { ReporteProductoService } from "../reporte.producto.service";

export class ReporteProductoServiceImpl implements ReporteProductoService {

    constructor(
        @InjectEntityManager() private entityManager: EntityManager
    ) { }

    async findMasVendidos(filtros?: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO[]> {
        const productosMasVendidos = await this.entityManager.query(`
            SELECT *
            FROM  (
                SELECT 
                    pr.id_producto AS idProducto,
                    tcp.id_tipo_categoria_producto AS idTipoCategoriaProducto,
                    tcp.nombre AS categoria,
                    pr.nombre AS nombre,
                    COUNT(code.id_producto) AS cantidadCompras,
                    SUM(code.valor_total) AS valorTotalCompras
                FROM producto pr
                INNER JOIN compra_detalle code ON pr.id_producto = code.id_producto
                INNER JOIN tipo_categoria_producto tcp ON pr.id_tipo_categoria_producto = tcp.id_tipo_categoria_producto
                GROUP BY pr.id_producto, pr.nombre, tcp.nombre, tcp.id_tipo_categoria_producto
                ORDER BY cantidadCompras DESC
            )
            WHERE ROWNUM <= :cantidadProductosMostrar
        `, [filtros.cantidadResultados]);
        return productosMasVendidos;
    }

}