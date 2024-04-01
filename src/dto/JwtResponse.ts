export class JwtResponse {
    timeAt: Date;
    token: string;

    constructor(token) {
        this.timeAt = new Date();
        this.token = token;
    }
}