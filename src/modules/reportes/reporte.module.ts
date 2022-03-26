import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReporteProductoController } from "./controllers/reportes.producto.controller";
import { ReporteProductoServiceImpl } from "./services/impl/reporte.producto.service.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
    ],
    providers: [ReporteProductoServiceImpl],
    controllers: [ReporteProductoController],
    exports: [TypeOrmModule, ReporteProductoServiceImpl],
})

export class ReporteModule { }