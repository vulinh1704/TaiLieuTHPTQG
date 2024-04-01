import {JwtService} from "../repository/JwtService";
import {StatusCodes} from "http-status-codes";
import {NextFunction, Request, Response} from "express";

export const auth = async (req, res: Response, next: NextFunction) => {
    let jwtService = new JwtService();
    let authorization = req.headers.authorization;
    if (authorization) {
        let payload = await jwtService.getPayload(authorization);
        if (payload) {
            req.decode = payload;
            next();
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'You are anonymous'
            });
        }
    } else {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'You are anonymous'
        });
    }
}