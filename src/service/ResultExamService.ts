import {ResultExamRepository} from "../repository/ResultExamRepository";
import {ResultExam} from "../model/ResultExam";

export class ResultExamService {
    private resultExamRepository: ResultExamRepository;

    constructor() {
        this.resultExamRepository = new ResultExamRepository();
    }

    findAll = async (title, type, subject, idUser) => {
        return this.resultExamRepository.findAll(title, type, subject, idUser);
    }

    add = async (resultExam: ResultExam)=> {
        return this.resultExamRepository.save(resultExam);
    }

    findById = async (id: number) => {
        return this.resultExamRepository.findById(id);
    }

    remove = async (id: number) => {
        return this.resultExamRepository.remove(id);
    }
}