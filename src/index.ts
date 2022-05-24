import * as express from 'express';
import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';
import { SeedData } from './seed';


const PORT = 5000;
const app = createExpressServer({
  controllers: [ CategoryController, ProductController],
});


app.use(express.json());

const seed = new SeedData();
seed.initialize();

app.listen(PORT, () => console.log('Сервер работает ' + PORT));
