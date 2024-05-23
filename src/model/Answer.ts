import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./Question";
import {ResultAnswer} from "./ResultAnswer";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "text", nullable: false})
    content: string;
    @Column({type: "boolean", default: false})
    isTrue: boolean;
    @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
    @OneToMany(() => ResultAnswer, (resultAnswer) => resultAnswer.answer)
    resultAnswers: ResultAnswer[]
}