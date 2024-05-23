import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {ExamService} from "../service/ExamService";

export class ExamController {
    private examService: ExamService;

    constructor() {
        this.examService = new ExamService();
    }

    findAll = async (req: Request, res: Response) => {
        const query = req.query;
        const list = await this.examService.findAll(query.title, query.type, query.subject);
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "Hiện bài không có bài thi nào"})
        }
        return res.status(StatusCodes.OK).json(list);
    }

    findAllExamCustom = async (req, res: Response) => {
        const query = req.query;
        const user = req.decode.idUser;
        const list = await this.examService.findAllExamCustom(query.title, query.type, query.subject, user);
        return res.status(StatusCodes.OK).json(list);
    }

    saveExamCustom = async (req, res: Response) => {
        req.body.user = req.decode.idUser;
        const exam = await this.examService.saveCustom(req.body);
        return res.status(StatusCodes.CREATED).json("Success");
    }

    save = async (req: Request, res: Response) => {
        const exam = await this.examService.add(req.body);
        return res.status(StatusCodes.CREATED).json(exam);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const exam = await this.examService.findById(id);
        return res.status(StatusCodes.OK).json(exam);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.examService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove exam success"});
    }
}