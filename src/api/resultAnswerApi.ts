import {Router} from "express";
import {ResultAnswerController} from "../controller/ResultAnswerController";

export const resultAnswerApi = Router();
const resultAnswerController = new ResultAnswerController();
resultAnswerApi.get("/questions/{id}", resultAnswerController.findAllByQuestion);
resultAnswerApi.post("", resultAnswerController.save);
resultAnswerApi.get("/:id", resultAnswerController.findById);
resultAnswerApi.delete("/:id", resultAnswerController.remove);