import "reflect-metadata"
import { DataSource } from "typeorm"
import { Description } from "./entity/Description"
import { Product } from "./entity/Product"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "electronic-store",
    synchronize: true,
    logging: false,
    entities: [ Description, Product, Description, Category],
    migrations: [__dirname + '/migration/**/*.ts'],
    subscribers: [],
    migrationsTableName: "migrations",
    
})

