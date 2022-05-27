import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("TIPO_FORMA_PAGO")
export class TipoFormaPagoEntity {

    @PrimaryGeneratedColumn({ name: "ID_TIPO_FORMA_PAGO"})
    idTipoFormaPago: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

    @Column({ name: "ACTIVO" })
    activo: string;

}