import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./Question";
import {Answer} from "./Answer";
import {ResultExam} from "./ResultExam";

@Entity()
export class ResultAnswer {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Answer, (answer) => answer.resultAnswers)
    answer: Answer;
    @Column({type: "boolean", default: false})
    isTrue: boolean;
    @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
    @ManyToOne(() => ResultExam, (resultExam) => resultExam.resultAnswers)
    resultExam: ResultExam;
    @Column({type: 'text', nullable: true})
    content: string;
}