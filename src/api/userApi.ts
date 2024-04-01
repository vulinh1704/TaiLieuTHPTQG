import {Router} from "express";
import {UserController} from "../controller/UserController";
import {auth} from "../middleware/jwtFilter";

export const userApi = Router();
const userController = new UserController();
userApi.post("/register", userController.register);
userApi.post("/login", userController.login);

userApi.use(auth);
userApi.get('', userController.getCurrentUser);
userApi.put('', userController.edit);