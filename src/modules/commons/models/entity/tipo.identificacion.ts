import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("TIPO_IDENTIFICACION")
export class TipoIdentificacionEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({ name: "ID_TIPO_IDENTIFICACION" })
    idTipoIdentificacion: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

    @Column({ name: "ABREVIATURA" })
    abreviatura: string;

    @Column({ name: "ACTIVO" })
    activo: string;

}