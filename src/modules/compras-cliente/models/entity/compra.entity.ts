import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Compra {

    @PrimaryGeneratedColumn()
    idCompra: number;

    @Column()
    fechaCompra: Date;

    @Column()
    valorTotal: number;
    
}