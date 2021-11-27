import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("COMPRA_PAGO")
export class CompraPagoEntity {

    @PrimaryColumn({ name: "ID_COMPRA_PAGO" })
    idCompraPago: number;

    @Column({ name: "ID_COMPRA" })
    idCompra: number;

    @Column({ name: "ID_FORMA_PAGO" })
    idFormaPago: number;

    @Column({ name: "NUMERO_COMPROBANTE" })
    numeroComprobante: string;

    @Column({ name: "VALOR" })
    valor: number;

}