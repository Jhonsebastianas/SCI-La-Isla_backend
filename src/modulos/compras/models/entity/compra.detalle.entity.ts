import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompraDetalle {

    @PrimaryGeneratedColumn()
    idCompraDetalle: number;

    @Column()
    idCompra: number;

    @Column()
    idProducto: number;

    @Column()
    cantidad: number;
    
}