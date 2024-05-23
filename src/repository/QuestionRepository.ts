import {IsNull, Repository} from "typeorm";
import {AppDataSource} from "../configuration/dataSource";
import {Question} from "../model/Question";

export class QuestionRepository {
    private repository: Repository<Question>;

    constructor() {
        this.repository = AppDataSource.getRepository(Question);
    }

    findAllBySubject = async (subject: any, type: any): Promise<Question[]> | null => {
        return this.repository.find({
            relations: ["type", "answers"],
            where: {
                exam: {
                    subject: {
                        id: subject,
                    },
                    status: "active",
                    type: type,
                    user: IsNull()
                }
            }
        });
    }

}