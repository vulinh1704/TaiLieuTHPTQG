import {NewRepository} from "../repository/NewRepository";
import {NewDTO} from "../dto/NewDTO";
import {New} from "../model/New";

export class NewService {
    private newRepository: NewRepository;

    constructor() {
        this.newRepository = new NewRepository();
    }

    findAll = async (keyword: string): Promise<NewDTO[]> | null => {
        return this.newRepository.findAll(keyword);
    }

    add = async (post: New): Promise<NewDTO> | null => {
        return this.newRepository.save(post);
    }

    findById = async (id: number): Promise<New> | null => {
        return this.newRepository.findById(id);
    }

    remove = async (id: number): Promise<any> | null => {
        return this.newRepository.remove(id);
    }
}