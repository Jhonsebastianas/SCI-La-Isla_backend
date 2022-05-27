import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("COMPRA_DETALLE")
export class CompraDetalleEntity {

    @PrimaryGeneratedColumn({ name: "ID_COMPRA_DETALLE" })
    idCompraDetalle: number;

    @Column({ name: "ID_COMPRA" })
    idCompra: number;

    @Column({ name: "ID_PRODUCTO" })
    idProducto: number;

    @Column({ name: "VALOR_TOTAL" })
    valorTotal: number;

    @Column({ name: "CANTIDAD" })
    cantidad: number;

}