import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductoModule } from './modules/productos/producto.module';
import { ProductoEntity } from './modules/productos/models/entity/producto.entity';
import { CategoriaProductoEntity } from './modules/productos/models/entity/categoria.producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "sqlite",
        database: ":memory:", //Indica que es una base de datos en memoria y se reinicia en cada ejecución
        entities: [ProductoEntity, CategoriaProductoEntity], // Se definen las entidades va administrar (y las cuales creara como tablas al momento de inicar la app)
        synchronize: true
      }),
    TypeOrmModule.forFeature([ProductoEntity, CategoriaProductoEntity]),
    //Administración de entidades debería hacerce solo en cada modulo encargado de la entidad
    ProductoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
