import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {SubjectService} from "../service/SubjectService";
import {Subject} from "../model/Subject";

export class SubjectController {
    private subjectService: SubjectService;

    constructor() {
        this.subjectService = new SubjectService();
    }

    findAll = async (req: Request, res: Response) => {
        const list = await this.subjectService.findAll();
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "No subjects"})
        }
        return res.status(StatusCodes.OK).json(list);
    }

    save = async (req: Request, res: Response) => {
        const post = await this.subjectService.add(req.body);
        return res.status(StatusCodes.CREATED).json(post);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const newsDetail: Subject = await this.subjectService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.subjectService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove subject success"});
    }
}