import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import xml2js from 'xml2js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'OpenJDK-Demo';
  public css: SafeStyle;
  public header: SafeHtml;
  public footer: SafeHtml;
  public script: SafeScript;
  public xmlItems: any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, @Inject(DOCUMENT) private document: Document) {

    this.http.get('https://uhf.microsoft.com/en-US/shell/xml/MSOpenjdk?headerId=MSOpenjdkHeader&footerid=MSOpenjdkFooter&CookieComplianceEnabled=true', {
      responseType: 'text'
    }).subscribe(response => {
      //debugger;
      //console.log(response);
      this.parseXML(response)
        .then((data) => {
          var res: any = data;
          this.css = res.cssIncludes;
          this.header = res.headerHtml;
          this.script = res.javascriptIncludes;
          this.footer = res.footerHtml;
          this.loadStyle(this.css);
          this.loadScripts(this.script);
        });
    })
  }

  parseXML(data) {
    //debugger;
    return new Promise(resolve => {
      let arr = [];
      let parser = new xml2js.Parser(
        {
          trim: true,
          explicitArray: true
        });
      parser.parseString(data, function (err, result) {
        var item = result.shell;
        arr.push({
          cssIncludes: item.cssIncludes[0],
          headerHtml: item.headerHtml[0],
          javascriptIncludes: item.javascriptIncludes[0],
          footerHtml: item.footerHtml[0]
        });

        resolve(arr[0]);
      });
    });
  }

  loadStyle(styleName) {
    const head = this.document.getElementsByTagName('head')[0];
    var list = styleName.split("/>");
    list.map(e => {
      if (e.trim()) {
        var element = e + '/>';
        head.insertAdjacentHTML('afterbegin', element);
      }
    })
  }

  loadScripts(styleName) {
    const head = this.document.getElementsByTagName('head')[0];
    var list = styleName.split("</script>");
    list.map(e => {
      if (e.trim()) {
        var element = e + '</script>';
        head.insertAdjacentHTML('afterend', element);
      }
    })
  }
}
