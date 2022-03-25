import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Cliente
import { ClienteEntity } from '@commons/models/entity/cliente.entity';
import { ClienteServiceImpl } from '@commons/services/impl/cliente.service.impl';
import { ClienteController } from '@commons/controllers/cliente.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ClienteEntity]),
    ],
    providers: [ClienteServiceImpl],
    controllers: [ClienteController],
    exports: [TypeOrmModule, ClienteServiceImpl],
})

export class CommonModule { }