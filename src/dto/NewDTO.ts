export class NewDTO {
    id: number;
    timeAt: Date;
    image: string;
    contentDemo: string;
    title: string;

    constructor(id: number, timeAt: Date, image: string, contentDemo: string, title: string) {
        this.id = id;
        this.timeAt = timeAt;
        this.image = image;
        this.contentDemo = contentDemo;
        this.title = title;
    }
}