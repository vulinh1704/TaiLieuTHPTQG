import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class New {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column({type: "text"})
    content: string;
    @Column()
    author: string;
    @Column()
    timeAt: Date;
    @Column()
    image: string;
    @Column({type: "text"})
    contentDemo: string;
    @ManyToOne(() => User, (user) => user.posts)
    user: User;
}