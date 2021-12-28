import { MagicNumber } from "@commons/util/constantes";

export class FiltroGeneralDTO {

    // Cantidad a mostrar
    cantidadResultados: number = MagicNumber.TRES;

    // filtro por fechas
    byFecha: boolean;
    byFechaInicio: string;
    byFechaFin: string;
}