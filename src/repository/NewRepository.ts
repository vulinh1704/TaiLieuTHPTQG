import {ILike, Repository} from "typeorm";
import {AppDataSource} from "../configuration/dataSource";
import {New} from "../model/New";
import {NewDTO} from "../dto/NewDTO";

export class NewRepository {
    private repository: Repository<New>;

    constructor() {
        this.repository = AppDataSource.getRepository(New);
    }

    findAll = async (keyword: string): Promise<NewDTO[]> | null => {
        let conditions: any = {};
        if (keyword) {
            conditions = [
                {
                    title: ILike(`%${keyword}%`)
                },
                {
                    author: ILike(`%${keyword}%`)
                }
            ];
        }
        return this.repository.find({
            order: {
                timeAt: "DESC"
            },
            where: conditions
        });
    }

    save = async (post: New): Promise<NewDTO> | null => {
        return this.repository.save(post);
    }

    findById = async (id: number): Promise<New> | null => {
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