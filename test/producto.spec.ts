import { Test } from "@nestjs/testing";
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import { AppModule } from "../src/app.module";
import RegistrarProductoTest from "./producto-test";
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

    it('Se registra un producto exitosamente', async () => {
        const resultadoRegistrarProducto = (await chai.request(app.getHttpServer())
            .post('producto/registrar')
            .send(new RegistrarProductoTest(
                1, "ProductoTest", 5, 2000, 3000, true
            ))).body;

        chai.expect(resultadoRegistrarProducto).to.have.property('idProducto');
    });
});