import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { Snippet } from '../snippet';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  snippets: Snippet[] = [
    {
      title: 'HTML Snippet',
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
    public: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  copyFunc(target)  {
    const text = $(target).text().trim();
    const clipboard = new ClipboardService(document, window);
    clipboard.copyFromContent(text);
  }
}
