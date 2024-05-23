import {SubjectRepository} from "../repository/SubjectRepository";
import {Subject} from "../model/Subject";

export class SubjectService {
    private subjectRepository : SubjectRepository;

    constructor() {
        this.subjectRepository = new SubjectRepository();
    }

    findAll = async ()=> {
        return this.subjectRepository.findAll();
    }

    add = async (subject: Subject) => {
        return this.subjectRepository.save(subject);
    }

    findById = async (id: number)=> {
        return this.subjectRepository.findById(id);
    }

    remove = async (id: number): Promise<any> | null => {
        return this.subjectRepository.remove(id);
    }
}