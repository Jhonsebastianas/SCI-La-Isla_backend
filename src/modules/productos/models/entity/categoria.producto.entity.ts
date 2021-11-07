import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity("CATEGORIA_PRODUCTO")
export class CategoriaProductoEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({ name: "ID_CATEGORIA_PRODUCTO" })
    idCategoriaProducto: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

}