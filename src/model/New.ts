import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class New {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column({type: "text"})
    content: string;
    @Column()
    author: string;
    @Column()
    timeAt: Date;
    @Column()
    image: string;
    @Column({type: "text"})
    contentDemo: string;

}