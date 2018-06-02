export class Snippet {
    title: string;
    date: string;
    snippet: string;
    author: string;
    isPublic: boolean;

    constructor(title: string, date: string, snippet: string, author: string, isPublic: boolean)  {
        this.title = title;
        this.date = date;
        this.snippet = snippet;
        this.author = author;
        this.isPublic = isPublic;
    }
}
