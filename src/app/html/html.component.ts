import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { Snippet } from '../snippet';
import { SnippetService } from '../services/snippet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  snippets: Snippet[] = [];
  private subscription: Subscription;

  constructor(private _snippetService: SnippetService) { }

  ngOnInit() {
    // this._snippetService.storeSnippets();
    this._snippetService.getSnippets().subscribe((data: Snippet[]) => {
      this.snippets = data;
    });
    // this.snippets = this._snippetService.getSnippets();
    this.subscription = this._snippetService.snippetsChanged.subscribe(
      (snippets: Snippet[]) =>  {
        this.snippets = snippets;
      }
    );
  }

  copyFunc(target)  {
    const text = $(target).text().trim();
    const clipboard = new ClipboardService(document, window);
    clipboard.copyFromContent(text);
  }

  addSnippet()  {
  }
}
