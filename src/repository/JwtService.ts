import {User} from "../model/User";
import {UserService} from "../service/UserService";
import jwt from "jsonwebtoken";
import {JwtResponse} from "../dto/JwtResponse";

export class JwtService {
    static SECRET = "123456";
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }


    getToken = async (user: User): Promise<JwtResponse> | null => {
        let userData = await this.userService.findUsernameAndPass(user);
        if (userData) {
            let payload = {
                idUser: userData.id
            }
            let token = jwt.sign(payload, JwtService.SECRET, {expiresIn: 36000 * 10 * 10});
            return new JwtResponse(token);
        } else {
            return null;
        }
    }

    getPayload = (authorization) => {
        let accessToken = authorization.split(' ')[1];
        if (accessToken) {
            try {
                return jwt.verify(accessToken, JwtService.SECRET);
            } catch (error) {
                return false;
            }
        } else {
            return false;
        }
    }
}