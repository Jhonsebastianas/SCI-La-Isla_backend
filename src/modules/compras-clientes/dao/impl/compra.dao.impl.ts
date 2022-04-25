import { Formats } from "@commons/util/dates.util";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { InjectEntityManager } from "@nestjs/typeorm";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { EntityManager } from "typeorm";
import { CompraDao } from "../compra.dao";

/**
 * Clase encargada de la capa de datos de las compras <br>
 * @createAt 2022-03-24, 23:56:14
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export class CompraDaoImpl implements CompraDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }


    async insert(compra: CompraEntity): Promise<CompraEntity> {
        return await this.entityManager.save(compra);
    }

    async update(compra: CompraEntity): Promise<CompraEntity> {
        return await this.entityManager.save(compra);
    }

    async delete(idsCompra: number | number[]): Promise<void> {
        await this.entityManager.delete(CompraEntity, idsCompra);
    }

    async findByPk(idCompra: number): Promise<CompraEntity> {
        return await this.entityManager.findOne<CompraEntity>(CompraEntity, idCompra);
    }

    async findAll(filtros?: FiltroGeneralDTO): Promise<CompraEntity[]> {
        if (!filtros) {
            return await this.entityManager.find(CompraEntity, {
                order: { idCompra: 'DESC' }
            });
        }
        const params = [];
        let sql: string = `
            SELECT
                co.id_compra    AS "idCompra",
                co.id_empleado  AS "idEmpleado",
                co.id_cliente   AS "idCliente",
                co.fecha_compra AS "fechaCompra",
                co.valor_total  AS "valorTotal"
            FROM compra co
            ?filtroFecha
            ORDER BY co.id_compra DESC
        `;
        sql = await this.applyGeneralFiltres(sql, params, filtros);
        return await this.entityManager.query(sql, params);
    }

    async applyGeneralFiltres(sql: string, params: any[], filtros?: FiltroGeneralDTO): Promise<string> {
        let hasWhere = false;

        if (filtros?.byFecha) {
            sql = sql.replace("?filtroFecha", `
                ${hasWhere && 'AND' || 'WHERE'} co.fecha_compra
                BETWEEN (TO_DATE(:byFechaInicio, '${Formats.INPUT_DATE_FORMAT}') - 1) AND (TO_DATE(:byFechaFin, '${Formats.INPUT_DATE_FORMAT}') + 1)
            `);
            params.push(filtros.byFechaInicio);
            params.push(filtros.byFechaFin);
        }
        // Eliminamos filtros no aplicados
        sql = sql.replace("?filtroFecha", "");

        // Cantidad de resultados
        // params.push(filtros?.cantidadResultados || 1);
        return sql;
    }

}