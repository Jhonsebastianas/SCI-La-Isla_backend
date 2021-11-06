import { Test } from "@nestjs/testing";
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import { AppModule } from "../src/app.module";
chai.use(chaiHttp);


describe('Productos Almacén La Isla test', () => {

    // Definimos la variable que nos permitira levantar el servidor para las pruebas.
    let app;

    // Iniciamos la app de Nestjs antes de cada prueba.
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = module.createNestApplication();
        await app.init();
    });

    // Cerramos la app.
    afterEach(async () => {
        await app.close();
    });

    it('Creación de un producto con su categoría, debería Almacenar Correctamente y retornar el producto con su identificación', async () => {
        
    });
});