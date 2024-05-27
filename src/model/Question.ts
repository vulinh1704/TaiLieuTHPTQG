import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Exam} from "./Exam";
import {Type} from "./Type";
import {Answer} from "./Answer";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "longtext", nullable: true})
    content: string;
    @ManyToOne(() => Exam, (exam) => exam.questions)
    exam: Exam;
    @ManyToOne(() => Type, (type) => type.questions)
    type: Type;
    @OneToMany(() => Answer, (answer) => answer.question, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    answers: Answer[];
    @Column({type: "varchar", default: "easy"})
    level: string;
    @Column({type: "varchar", default: null})
    image: string;
}