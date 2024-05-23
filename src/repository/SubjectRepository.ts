import {Repository} from "typeorm";
import {AppDataSource} from "../configuration/dataSource";
import {Subject} from "../model/Subject";

export class SubjectRepository {
    private repository: Repository<Subject>;

    constructor() {
        this.repository = AppDataSource.getRepository(Subject);
    }

    findAll = async () => {
        return this.repository.find();
    }

    save = async (subject: Subject)=> {
        return this.repository.save(subject);
    }

    findById = async (id: number) => {
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