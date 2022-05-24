import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Category } from "./Category"
import { Description } from "./Description"

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    idProduct: number;

    @Column()
    nameProduct: string;

    @Column()
    cost: number;

    @Column()
    img: string;

    @Column()
    counterOrder: number;

    @OneToMany(() => Description, (description) => description.product, { cascade: true })
    descriptions: Description[];

    @ManyToOne(() => Category, (Category) => Category.products, { nullable: true })
    category: Category;

    @Column()
    quantityInWarehouse: number;

}
