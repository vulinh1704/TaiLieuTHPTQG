import {Router} from "express";
import {ResultExamController} from "../controller/ResultExamController";
import {auth} from "../middleware/jwtFilter";

export const resultExamApi = Router();
const resultExamController = new ResultExamController();
resultExamApi.use(auth);
resultExamApi.get("", resultExamController.findAll);
resultExamApi.post("", resultExamController.save);
resultExamApi.get("/:id", resultExamController.findById);
resultExamApi.delete("/:id", resultExamController.remove);