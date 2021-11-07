import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("PRODUCTO")
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({ name: "ID_PRODUCTO" })
    idProducto: number;

    @Column({ name: "ID_CATEGORIA_PRODUCTO" })
    idCategoriaProducto: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

    @Column({ name: "STOCK" })
    stock: number;

    @Column({ name: "PRECIO_COMPRA" })
    precioCompra: number;

    @Column({ name: "PRECIO_VENTA" })
    precioVenta: number;

}