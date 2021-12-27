import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module common
import { CommonModule } from '@commons/common.module';
import { ClienteEntity } from '@commons/models/entity/cliente.entity';

// Module productos
import { ProductoModule } from './modules/productos/producto.module';
import { ProductoEntity } from './modules/productos/models/entity/producto.entity';
import { TipoCategoriaProductoEntity } from './modules/productos/models/entity/tipo.categoria.producto.entity';

// Module compras cliente
import { CompraClienteModule } from '@compras.clientes/compra.cliente.module';
import { TipoFormaPagoEntity } from '@compras.clientes/models/entity/tipo.forma.pago.entity';
import { CompraPagoEntity } from '@compras.clientes/models/entity/compra.pago.entity';
import { CompraDetalleEntity } from '@compras.clientes/models/entity/compra.detalle.entity';
import { CompraEntity } from '@compras.clientes/models/entity/compra.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        // type: "sqlite", //https://github.com/nestjs/typeorm/issues/66
        type: 'oracle',
        host: 'localhost',
        port: 1521,
        username: 'LAISLA',
        password: '1OuFL@uuuwiI',
        database: 'db_laisla',
        sid: 'xe',
        // database: ":memory:", //Indica que es una base de datos en memoria y se reinicia en cada ejecución
        entities: [ // Se definen las entidades va administrar (y las cuales creara como tablas al momento de inicar la app)
          // Common
          ClienteEntity,
          // Productos
          ProductoEntity, TipoCategoriaProductoEntity,
          // Compras cliente
          TipoFormaPagoEntity, CompraEntity, CompraPagoEntity, CompraDetalleEntity
        ],
        synchronize: false
      }),
    TypeOrmModule.forFeature([
      // Common
      ClienteEntity,
      // Productos
      ProductoEntity, TipoCategoriaProductoEntity,
      // Compras cliente
      TipoFormaPagoEntity, CompraEntity, CompraPagoEntity, CompraDetalleEntity
    ]),
    //Administración de entidades debería hacerce solo en cada modulo encargado de la entidad
    CommonModule,
    ProductoModule,
    CompraClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
