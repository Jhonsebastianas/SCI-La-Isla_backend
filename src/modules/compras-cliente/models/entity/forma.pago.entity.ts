import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormaPago {

    @PrimaryGeneratedColumn()
    idFormaPago: number;

    @Column()
    nombre: string;
    
}