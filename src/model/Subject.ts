import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Exam} from "./Exam";


@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", nullable: false, unique: true})
    name: string;
    @OneToMany(() => Exam, (exam) => exam.subject )
    exams: Exam[];
}