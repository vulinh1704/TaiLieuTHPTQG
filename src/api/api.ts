import {Router} from "express";
import {userApi} from "./userApi";
import {newApi} from "./newApi";

export const api = Router();
api.use("/users", userApi);
api.use("/news", newApi);