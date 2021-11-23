import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity("TIPO_CATEGORIA_PRODUCTO")
export class TipoCategoriaProductoEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({ name: "ID_TIPO_CATEGORIA_PRODUCTO" })
    idTipoCategoriaProducto: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

}