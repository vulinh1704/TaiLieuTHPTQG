import {ExamRepository} from "../repository/ExamRepository";
import {Exam} from "../model/Exam";
import {QuestionRepository} from "../repository/QuestionRepository";

export class ExamService {
    private examRepository: ExamRepository;
    private questionRepository: QuestionRepository;

    constructor() {
        this.examRepository = new ExamRepository();
        this.questionRepository = new QuestionRepository();
    }

    findAll = async (title, type, subject) => {
        return this.examRepository.findAll(title, type, subject);
    }

    findAllExamCustom = async (title, type, subject, user) => {
        return this.examRepository.findAll(title, type, subject, user);
    }

    add = async (exam: Exam)=> {
        return this.examRepository.save(exam);
    }

    findById = async (id: number) => {
        return this.examRepository.findById(id);
    }

    remove = async (id: number) => {
        return this.examRepository.remove(id);
    }

    saveCustom = async (data: any) => {
        let listQuestion: any = await this.questionRepository.findAllBySubject(data.subject, data.type);
        listQuestion = this.getRandomSubarray(listQuestion, data.quantityQuestion);
        listQuestion = listQuestion.map((item) => {
            delete item.id;
            item.answers = item.answers.map(e => {
                delete e.id;
                return e;
            })
            return item;
        });
        let exam: any  = {
            title: data.title,
            rate: data.rate,
            subject: {
                id: data.subject
            },
            timeAt: data.timeAt,
            type: data.type,
            user: {
                id: data.user
            },
            questions: listQuestion
        }
        exam = await this.examRepository.save(exam);
        return exam;
    }

    getRandomSubarray = (arr, size) => {
        let shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor(Math.random() * (i + 1));
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }
}