import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Matches, MinLength} from "class-validator";
import {New} from "./New";
import {Exam} from "./Exam";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", nullable: false, unique: true})
    @MinLength(20)
    username: string;
    @Column({type: "varchar"})
    password: string;
    @Column({type: "varchar", default: "USER"})
    role: string;
    @Column({type: "varchar", default: "https://thithu.edu.vn/logo/avatar-sm.png"})
    avatar: string;
    @Column({type: "datetime", nullable: true})
    dateOfBirth: Date;
    @Column({type: "varchar", nullable: false, unique: true})
    email: string;
    @Column({type: "int", nullable: true})
    gender: number;
    @OneToMany(() => New, (post) => post.user)
    posts: New[];
    @OneToMany(() => Exam, (exam) => exam.user)
    exams: Exam[];
}