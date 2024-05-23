import {ILike, IsNull, Repository} from "typeorm";
import {AppDataSource} from "../configuration/dataSource";
import {Exam} from "../model/Exam";

export class ExamRepository {
    private repository: Repository<Exam>;

    constructor() {
        this.repository = AppDataSource.getRepository(Exam);
    }

    findAll = async (title, type, subject, user = null): Promise<Exam[]> | null => {
        const condition: any = {
            status: "active"
        }
        if (type) {
            condition.type = type
        }
        if(title) {
            condition.title = ILike(`%${title}%`);
        }
        if(subject) {
            condition.subject = {
                id: subject
            };
        }
        if(user) {
            condition.user = {
                id: user
            };
        } else {
            condition.user = IsNull();
        }
        return this.repository.find({
            order: {
                timeAt: "DESC",
            },
            relations: ["subject", "questions", "questions.answers", "questions.type"],
            where: condition
        });
    }

    save = async (exam: Exam): Promise<Exam> | null => {
        return this.repository.save(exam);
    }

    findById = async (id: number): Promise<Exam> | null => {
        return this.repository.findOne({
            relations: ["subject", "questions", "questions.answers", "questions.type"],
            where: {
                status: "active",
                id: id,
            }
        });
    }

    remove = async (id: number): Promise<any> | null => {
        let exam = await this.findById(id);
        exam.status = "deleted"
        return this.repository.save(exam);
    }
}