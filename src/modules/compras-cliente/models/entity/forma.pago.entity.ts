import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("FORMA_PAGO")
export class FormaPago {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({ name: "ID_FORMA_PAGO" })
    idFormaPago: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

    @Column({ name: "ACTIVO" })
    activo: string;

}