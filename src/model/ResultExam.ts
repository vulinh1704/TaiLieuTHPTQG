import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Exam} from "./Exam";
import {Question} from "./Question";
import {User} from "./User";
import {ResultAnswer} from "./ResultAnswer";

@Entity()
export class ResultExam {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    timeAt: string;
    @ManyToOne(() => Exam, (exam) => exam.resultExams)
    exam: Exam;
    @Column({type: "varchar", default: "active"})
    status: string;
    @Column({type: "double"})
    score: number;
    @ManyToOne(() => User, (user) => user.resultExams)
    user: User;
    @OneToMany(() => ResultAnswer, (resultAnswer) => resultAnswer.resultExam)
    resultAnswers: ResultAnswer[];
}