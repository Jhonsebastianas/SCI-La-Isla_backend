import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoriaProductoEntity } from './categoria.producto.entity';

@Entity()
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    idProducto: number;

    @ManyToOne(type => CategoriaProductoEntity)
    @JoinColumn({ name: 'idCategoriaProducto' })
    categoria: CategoriaProductoEntity;

    @Column()
    nombre: string;

    @Column()
    stock: number;

    @Column()
    precioCompra: number;

    @Column()
    precioVenta: number;

}