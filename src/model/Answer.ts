import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./Question";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "text", nullable: false})
    content: string;
    @Column()
    isTrue: boolean;
    @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
}