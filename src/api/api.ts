import {Router} from "express";
import {userApi} from "./userApi";
import {newApi} from "./newApi";
import {examApi} from "./examApi";
import {subjectApi} from "./subjectApi";
import {resultExamApi} from "./resultExamApi";
import {resultAnswerApi} from "./resultAnswerApi";

export const api = Router();
api.use("/users", userApi);
api.use("/news", newApi);
api.use("/exams", examApi);
api.use("/subjects", subjectApi);
api.use("/resultExams", resultExamApi);
api.use("/resultAnswers", resultAnswerApi);