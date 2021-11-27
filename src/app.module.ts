import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module productos
import { ProductoModule } from './modules/productos/producto.module';
import { ProductoEntity } from './modules/productos/models/entity/producto.entity';
import { TipoCategoriaProductoEntity } from './modules/productos/models/entity/tipo.categoria.producto.entity';

// Module compras cliente
import { CompraClienteModule } from '@compras.clientes/compra.cliente.module';
import { TipoFormaPagoEntity } from '@compras.clientes/models/entity/tipo.forma.pago.entity';
import { CompraPagoEntity } from '@compras.clientes/models/entity/compra.pago.entity';
import { CompraDetalleEntity } from '@compras.clientes/models/entity/compra.detalle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "sqlite", //https://github.com/nestjs/typeorm/issues/66

        database: ":memory:", //Indica que es una base de datos en memoria y se reinicia en cada ejecución
        entities: [ // Se definen las entidades va administrar (y las cuales creara como tablas al momento de inicar la app)
          ProductoEntity, TipoCategoriaProductoEntity,
          // Compras cliente
          TipoFormaPagoEntity, CompraPagoEntity, CompraDetalleEntity
        ],
        synchronize: true
      }),
    TypeOrmModule.forFeature([
      ProductoEntity, TipoCategoriaProductoEntity,
      // Compras cliente
      TipoFormaPagoEntity, CompraPagoEntity, CompraDetalleEntity
    ]),
    //Administración de entidades debería hacerce solo en cada modulo encargado de la entidad
    ProductoModule,
    CompraClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
