import {UserService} from "../service/UserService";
import {User} from "../model/User";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {JwtService} from "../repository/JwtService";
import {JwtResponse} from "../dto/JwtResponse";
import {UserDTO} from "../dto/UserDTO";

export class UserController {
    private userService: UserService;
    private jwtService: JwtService;

    constructor() {
        this.userService = new UserService();
        this.jwtService = new JwtService();
    }

    register = async (req: Request<User>, res: Response) => {
        let user: User = req.body;
        let dataUser = await this.userService.findByUsernameOrEmail(user);
        if (dataUser) {
            if (dataUser.email === user.email) {
                return res.status(StatusCodes.CONFLICT).json({error: "Email already exists"})
            } else if (dataUser.username === dataUser.username) {
                return res.status(StatusCodes.CONFLICT).json({error: "Username already exists"})
            }
        }   else {
            await this.userService.save(user);
            return res.status(StatusCodes.OK).json({message: "Register Success"});
        }
    }

    login = async (req: Request<User>, res: Response) => {
        let user: User = req.body;
        let jwtResponse: JwtResponse = await this.jwtService.getToken(user);
        if (jwtResponse) {
            return res.status(StatusCodes.OK).json(jwtResponse);
        } else {
            return res.status(StatusCodes.UNAUTHORIZED).json({message: "Username or Password is wrong"});
        }
    }

    getCurrentUser = async (req, res: Response) => {
        let id = req.decode.idUser;
        let currentUser: UserDTO = await this.userService.findById(id);
        if (currentUser) {
            return res.status(StatusCodes.OK).json(currentUser);
        }
        return res.status(StatusCodes.NO_CONTENT).json({error: "User not found"})
    }

    edit = async (req, res: Response) => {
        let user: UserDTO = req.body;
        user.id = req.decode.idUser;
        await this.userService.edit(user);
        return res.status(StatusCodes.OK).json({message: "Edit user success"});
    }

}