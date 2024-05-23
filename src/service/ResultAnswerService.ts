import {ResultAnswerRepository} from "../repository/ResultAnswerRepository";
import {ResultAnswer} from "../model/ResultAnswer";

export class ResultAnswerService {
    private resultAnswerRepository: ResultAnswerRepository;

    constructor() {
        this.resultAnswerRepository = new ResultAnswerRepository();
    }

    findAllByQuestion = async (id) => {
        return this.resultAnswerRepository.findAllByQuestion(id);
    }

    add = async (resultAnswers: ResultAnswer[])=> {
        return this.resultAnswerRepository.save(resultAnswers);
    }

    findById = async (id: number) => {
        return this.resultAnswerRepository.findById(id);
    }

    remove = async (id: number) => {
        return this.resultAnswerRepository.remove(id);
    }
}