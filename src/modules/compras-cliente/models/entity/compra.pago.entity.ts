import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompraPago {

    @PrimaryGeneratedColumn()
    idCompraPago: number;

    @Column()
    numeroComprobante: string;

    @Column()
    valor: number;

}