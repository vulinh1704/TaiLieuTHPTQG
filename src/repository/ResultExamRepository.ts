import {ILike, Repository} from "typeorm";
import {AppDataSource} from "../configuration/dataSource";
import {Exam} from "../model/Exam";
import {ResultExam} from "../model/ResultExam";

export class ResultExamRepository {
    private repository: Repository<ResultExam>;

    constructor() {
        this.repository = AppDataSource.getRepository(ResultExam);
    }

    findAll = async (title, type, subject, idUser): Promise<ResultExam[]> | null => {
        const condition: any = {
            status: "active",
            user: {
                id: idUser
            },
            exam: {
                status: "active"
            }
        }
        if (type) {
            condition.type = type
        }
        if (title) {
            condition.title = ILike(`%${title}%`);
        }
        if (subject) {
            condition.subject = {
                id: subject
            };
        }
        return this.repository.find({
            order: {
                timeAt: "DESC",
            },
            relations: ["exam.subject", "exam", "exam.questions", "exam.questions.answers"],
            where: condition
        });
    }

    save = async (resultExam: ResultExam): Promise<ResultExam> | null => {
        return this.repository.save(resultExam);
    }

    findById = async (id: number): Promise<ResultExam> | null => {
        return this.repository.findOne({
            relations: ["exam.subject", "exam", "exam.questions", "exam.questions.answers", "resultAnswers", "resultAnswers.question", "resultAnswers.answer"],
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