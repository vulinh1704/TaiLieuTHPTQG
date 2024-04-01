import {NewService} from "../service/NewService";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {New} from "../model/New";
import {NewDTO} from "../dto/NewDTO";

export class NewController {
    private newService: NewService;

    constructor() {
        this.newService = new NewService();
    }

    findAll = async (req: Request, res: Response) => {
        const list = await this.newService.findAll();
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "Hiện bài không có bài viết nào"})
        }
        return res.status(StatusCodes.OK).json(list);
    }

    save = async (req: Request, res: Response) => {
        const post: NewDTO = await this.newService.add(req.body);
        return res.status(StatusCodes.CREATED).json(post);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const newsDetail: New = await this.newService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.newService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove news success"});
    }
}