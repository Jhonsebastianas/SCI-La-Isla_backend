import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProductoEntity } from './producto.entity';

@Entity()
export class CategoriaProductoEntity {

    @PrimaryGeneratedColumn()
    idCategoriaProducto: number;

    @Column()
    nombre: string;

}