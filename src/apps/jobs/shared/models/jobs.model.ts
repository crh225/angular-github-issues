export class Jobs {
    company: string;
    description: string;
    title: string;
    id?: string;
    constructor(company: string = '', description: string = '', title: string = '') {
        this.company = company;
        this.description = description;
        this.title = title;
    }
}
