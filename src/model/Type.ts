import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./Question";

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", nullable: false, unique: true})
    name: string;
    @OneToMany(() => Question, (questions) => questions.type)
    questions: Question[];
}