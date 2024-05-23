import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Subject} from "./Subject";
import {Question} from "./Question";
import {User} from "./User";
import {ResultExam} from "./ResultExam";

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
    @OneToMany(() => Question, (question) => question.exam, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    questions: Question[];
    @Column()
    timeAt: Date;
    @Column({type: "varchar", default: "active"})
    status: string;
    @Column({type: "varchar", default: "easy"})
    type: string;
    @OneToMany(() => ResultExam, (resultExam) => resultExam.exam)
    resultExams: ResultExam[];
    @ManyToOne(() => User, (user) => user.exams)
    user: User;
}