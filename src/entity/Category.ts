import { Entity, Column,  ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {

    @PrimaryColumn()
    name: string;

    @Column({ length: 50 })
    icon: string;

    @Column({ length: 50 })
    img: string;

    @Column()
    counterOrder: number;

    @ManyToOne((type) => Category, category => category.subcategories)
    parent: Category;

    @OneToMany((type) => Category, category => category.parent)
    subcategories: Category[];

    @OneToMany(() => Product, (prodcut) => prodcut.category, { cascade: true })
    products: Product[];

}