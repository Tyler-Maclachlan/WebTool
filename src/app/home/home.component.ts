import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { SnippetService } from '../services/snippet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

