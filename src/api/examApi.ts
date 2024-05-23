import {Router} from "express";
import {ExamController} from "../controller/ExamController";
import {api} from "./api";
import {auth} from "../middleware/jwtFilter";

export const examApi = Router();
const examController = new ExamController();
examApi.get("", examController.findAll);
examApi.post("", examController.save);
examApi.get("/:id", examController.findById);
examApi.delete("/:id", examController.remove);

examApi.use(auth);
examApi.post("/users/save", examController.saveExamCustom);
examApi.get("/users/get", examController.findAllExamCustom);