import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Product } from "./Product"

@Entity()
export class Description {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    value: string;

    @Column({ length: 15, nullable: true })
    prefix: string;

    @ManyToOne(() => Product, (product) => product.descriptions)
    product: Product;
}
