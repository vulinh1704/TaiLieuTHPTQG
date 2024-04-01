import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Subject} from "./Subject";
import {Question} from "./Question";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", nullable: false})
    title: string;
    @Column({type: "int", nullable: false})
    rate: number;
    @ManyToOne(() => Subject, (subject) => subject.exams)
    subject: Subject;
    @OneToMany(() => Question, (question) => question.exam)
    questions: Question[]
}