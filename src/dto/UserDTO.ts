export class UserDTO {
    id: number;
    username: string;
    avatar: string;
    dateOfBirth: Date;
    email: string;
    gender: number;

    constructor(id: number, username: string, avatar: string, dateOfBirth: Date, email: string, gender: number) {
        this.id = id;
        this.username = username;
        this.avatar = avatar;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.gender = gender;
    }
}