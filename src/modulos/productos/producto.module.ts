import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ProductoEntity } from "./models/entity/producto.entity";
import { CategoriaProductoEntity } from "./models/entity/categoria.producto.entity";
import { ProductoServiceImpl } from "./services/impl/producto.services.impl";
import { ProductoController } from "./controllers/producto.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductoEntity, CategoriaProductoEntity]),
    ],
    providers: [ProductoServiceImpl],
    controllers: [ProductoController],
    exports: [TypeOrmModule],
})

export class ProductoModule { }