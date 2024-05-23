export class UserDTO {
    id: number;
    username: string;
    avatar: string;
    dateOfBirth: Date;
    email: string;
    role: string
    gender: string;

    constructor(id: number, username: string, avatar: string, dateOfBirth: Date, email: string, gender: string, role: string) {
        this.id = id;
        this.username = username;
        this.avatar = avatar;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.gender = gender;
        this.role = role;
    }
}