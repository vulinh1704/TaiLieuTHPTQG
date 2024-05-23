import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {ResultAnswerService} from "../service/ResultAnswerService";

export class ResultAnswerController {
    private resultAnswerService: ResultAnswerService;

    constructor() {
        this.resultAnswerService = new ResultAnswerService();
    }

    findAllByQuestion = async (req: Request, res: Response) => {
        const list = await this.resultAnswerService.findAllByQuestion(req.params.id);
        return res.status(StatusCodes.OK).json(list);
    }

    save = async (req: Request, res: Response) => {
        const post = await this.resultAnswerService.add(req.body);
        return res.status(StatusCodes.CREATED).json(post);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const newsDetail = await this.resultAnswerService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.resultAnswerService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove result answer success"});
    }
}