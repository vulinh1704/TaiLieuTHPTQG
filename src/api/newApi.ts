import {Router} from "express";
import {NewController} from "../controller/NewController";

export const newApi = Router();
const newController = new NewController();
newApi.get("", newController.findAll);
newApi.post("", newController.save);
newApi.get("/:id", newController.findById);
newApi.delete("/:id", newController.remove);
