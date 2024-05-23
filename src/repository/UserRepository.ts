import {Repository} from "typeorm";
import {User} from "../model/User";
import {AppDataSource} from "../configuration/dataSource";
import bcrypt from "bcrypt";
import {UserDTO} from "../dto/UserDTO";

export class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    save = async (user: User): Promise<User> | null => {
        return this.repository.save(user);
    }

    edit = async (user: UserDTO): Promise<User> | null => {
        return this.repository.save(user);
    }

    findUsernameAndPass = async (user: User): Promise<User> | null => {
        let dataUser: User = await this.repository.findOneBy({username: user.username});
        if (!dataUser) {
            return null;
        } else {
            let isCheckPassword = await bcrypt.compare(user.password, dataUser.password);
            if (isCheckPassword) {
                return dataUser;
            } else {
                return null;
            }
        }
    }

    findById = async (id: number): Promise<User> | null => {
        let dataUser: User = await this.repository.findOneBy({id: id});
        if (dataUser) {
            return dataUser;
        }
        return null;
    }

    findByUsernameOrEmail = async (user: User): Promise<User> | null => {
        return await this.repository.findOne({
            where: [
                {username: user.username},
                {email: user.email}
            ]
        });
    }
}