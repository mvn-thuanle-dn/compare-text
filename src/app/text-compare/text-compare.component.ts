import { Component, Input, OnInit, Output } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'app-text-compare',
  templateUrl: './text-compare.component.html',
  styleUrls: ['./text-compare.component.css'],
})
export class TextCompareComponent implements OnInit {
  languages = [
    'bat',
    'c',
    'coffeescript',
    'cpp',
    'csharp',
    'csp',
    'css',
    'dockerfile',
    'fsharp',
    'go',
    'handlebars',
    'html',
    'ini',
    'java',
    'javascript',
    'json',
    'less',
    'lua',
    'markdown',
    'msdax',
    'mysql',
    'objective-c',
    'pgsql',
    'php',
    'plaintext',
    'postiats',
    'powershell',
    'pug',
    'python',
    'r',
    'razor',
    'redis',
    'redshift',
    'ruby',
    'rust',
    'sb',
    'scss',
    'sol',
    'sql',
    'st',
    'swift',
    'typescript',
    'vb',
    'xml',
    'yaml',
  ];
  themes = [
    {
      value: 'vs',
      name: 'Visual Studio',
    },
    {
      value: 'vs-dark',
      name: 'Visual Studio Dark',
    },
    {
      value: 'hc-black',
      name: 'High Contrast Dark',
    },
  ];

  options = {
    code1: '',
    code2: '',
    language: 'plaintext',
    theme: 'vs',
  };

  isCompare = false;

  ngOnInit() {}
}
