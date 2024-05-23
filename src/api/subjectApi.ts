import {Router} from "express";
import {SubjectController} from "../controller/SubjectController";

export const subjectApi = Router();
const subjectController = new SubjectController();
subjectApi.get("", subjectController.findAll);
subjectApi.post("", subjectController.save);
subjectApi.get("/:id", subjectController.findById);
subjectApi.delete("/:id", subjectController.remove);