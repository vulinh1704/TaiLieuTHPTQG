import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {ResultExamService} from "../service/ResultExamService";

export class ResultExamController {
    private resultExamService: ResultExamService;

    constructor() {
        this.resultExamService = new ResultExamService();
    }

    findAll = async (req, res: Response) => {
        const query = req.query;
        const list = await this.resultExamService.findAll(query.title, query.type, query.subject, req.decode.idUser);
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "Hiện bài không bạn chưa thi"})
        }
        return res.status(StatusCodes.OK).json(list);
    }

    save = async (req, res: Response) => {
        let id = req.decode.idUser;
        req.body.user = {id: id};
        const exam = await this.resultExamService.add(req.body);
        return res.status(StatusCodes.CREATED).json(exam);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const resultExam = await this.resultExamService.findById(id);
        return res.status(StatusCodes.OK).json(resultExam);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.resultExamService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove result exam success"});
    }
}