import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module productos
import { ProductoModule } from './modules/productos/producto.module';
import { ProductoEntity } from './modules/productos/models/entity/producto.entity';
import { CategoriaProductoEntity } from './modules/productos/models/entity/categoria.producto.entity';

// Module compras cliente
import { FormaPagoEntity } from '@compras.clientes/models/entity/forma.pago.entity';
import { CompraClienteModule } from '@compras.clientes/compra.cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "sqlite",
        database: ":memory:", //Indica que es una base de datos en memoria y se reinicia en cada ejecución
        entities: [ // Se definen las entidades va administrar (y las cuales creara como tablas al momento de inicar la app)
          ProductoEntity, CategoriaProductoEntity,
          // Compras cliente
          FormaPagoEntity,
        ],
        synchronize: true
      }),
    TypeOrmModule.forFeature([
      ProductoEntity, CategoriaProductoEntity,
      // Compras cliente
      FormaPagoEntity
    ]),
    //Administración de entidades debería hacerce solo en cada modulo encargado de la entidad
    ProductoModule,
    CompraClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
