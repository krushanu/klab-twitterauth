import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TwitterService } from 'ng2-twitter';
import { last } from 'rxjs/operator/last';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter Integration';
  result;
  data;
  body;

  constructor(private _http: Http) {}
  getAuth() {
    // console.log('authenticate !!!');
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this._http.post('http://localhost:3000/authorize', { headers: headers }).subscribe((res) => {
      console.log(res);
      console.log("====================================");
      this.data = res;
      this.body = JSON.parse(this.data._body);
      console.log(this.body);
      
      // on success re direct to:
      //https://api.twitter.com/oauth/authenticate?oauth_token=
      
      alert(this.body.oauth_token);
      window.location.href = 'https://api.twitter.com/oauth/authenticate?oauth_token=' + this.body.oauth_token;

    });
  }
}
