import {UserRepository} from "../repository/UserRepository";
import {User} from "../model/User";
import bcrypt from "bcrypt";
import {UserDTO} from "../dto/UserDTO";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    save = async (user: User): Promise<User> | null => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }

    edit = async (user: UserDTO): Promise<User> | null => {
        return this.userRepository.edit(user);
    }

    findUsernameAndPass = async (user: User): Promise<User> | null => {
        return this.userRepository.findUsernameAndPass(user);
    }

    findById = async (id: number): Promise<UserDTO> | null => {
        return this.userRepository.findById(id);
    }

    findByUsernameOrEmail = (user: User): Promise<User> | null => {
        return this.userRepository.findByUsernameOrEmail(user);
    }
}