import { Injectable } from '@angular/core';
import { Snippet } from '../snippet';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  snippetsChanged = new Subject<Snippet[]>();

  private snippets: Snippet[] = [
    {
      title: 'HTML Snippets',
      date: '21 May 2018',
      snippet: `<html>
    <head>
        <title>Test</title>
    </head>
    <body>
        <p>Testing</p>
    </body>
</html>`,
      author: 'Tyler Maclachlan',
      isPublic: true
    },
  ];

  constructor(private http: HttpClient) { }

  getSnippets() {
    return this.http.get<Snippet[]>('https://webtool-e3b3c.firebaseio.com/html.json');
    // return this.snippets;
  }

  setSnippets(snippets: Snippet[])  {
    this.snippets = snippets;
  }

  addSnippet(snippet: Snippet)  {
    this.snippets.push(snippet);
    this.http.post('https://webtool-e3b3c.firebaseio.com/html.json', snippet).subscribe((data) => {
      console.log(data);
    });
    this.snippetsChanged.next(this.snippets.slice());
  }

  storeSnippets() {
    this.http.put('https://webtool-e3b3c.firebaseio.com/html.json', this.getSnippets()).subscribe((data) => {
      console.log(data);
    });
  }
}
