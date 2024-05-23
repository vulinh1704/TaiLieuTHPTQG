export class JwtResponse {
    timeAt: Date;
    token: string;
    role: string;

    constructor(token, role) {
        this.timeAt = new Date();
        this.token = token;
        this.role = role
    }
}