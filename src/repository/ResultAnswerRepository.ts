import {Repository} from "typeorm";
import {AppDataSource} from "../configuration/dataSource";
import {ResultAnswer} from "../model/ResultAnswer";

export class ResultAnswerRepository {
    private repository: Repository<ResultAnswer>;

    constructor() {
        this.repository = AppDataSource.getRepository(ResultAnswer);
    }

    findAllByQuestion = async (id): Promise<ResultAnswer[]> | null => {
        return this.repository.find({
            where: {
                question: {
                    id: id
                }
            },
            relations: ["answer"]
        });
    }

    save = async (resultAnswers: ResultAnswer[]): Promise<ResultAnswer[]> | null => {
        return this.repository.save(resultAnswers);
    }

    findById = async (id: number): Promise<ResultAnswer> | null => {
        return this.repository.findOneBy({
            id: id
        });
    }

    remove = async (id: number): Promise<any> | null => {
        return this.repository.delete({
            id: id
        });
    }
}