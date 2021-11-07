import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Producto
import { ProductoEntity } from "./models/entity/producto.entity";
import { ProductoServiceImpl } from "./services/impl/producto.services.impl";
import { ProductoController } from "./controllers/producto.controller";

// Categoria producto
import { CategoriaProductoEntity } from "./models/entity/categoria.producto.entity";
import { CategoriaProductoServiceImpl } from "./services/impl/categoria.producto.services.impl";
import { CategoriaProductoController } from "./controllers/categoria.producto.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductoEntity, CategoriaProductoEntity]),
    ],
    providers: [ProductoServiceImpl, CategoriaProductoServiceImpl],
    controllers: [ProductoController, CategoriaProductoController],
    exports: [TypeOrmModule],
})

export class ProductoModule { }