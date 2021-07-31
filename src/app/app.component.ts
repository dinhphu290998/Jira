  import { Component, OnInit } from '@angular/core';
  import { AngularFireDatabase } from '@angular/fire/database';
  import { HttpClient, HttpParams } from '@angular/common/http';
  import firebase from 'firebase';
  import { AppGlobal } from './app.usecases'
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['./app.component.css']
  })

  export class AppComponent implements OnInit {
    textSearch = ""
    type = ""
    location = ""
    count = 0
    isShowResult = false
    pageNumber = 0
    countCrawling = 0

    constructor(private db: AngularFireDatabase,private http: HttpClient) { 

    }
    timer(ms: any) {
      return new Promise(res => setTimeout(res, ms));
    }
    
    async ngOnInit() {
      const texts = AppGlobal.textSearchCases
      const types = AppGlobal.typeCases
      const pageNumbers = AppGlobal.pageNumberCases
      const locations = AppGlobal.locationCases
      this.countCrawling = 0

      for(var i = 0; i <= texts.length - 1; i++){
        this.textSearch = texts[i]
        for(var j = 0; j <= locations.length - 1; j++){
          this.location = locations[j]
          for(var k = 0; k <= pageNumbers.length - 1; k++){
            this.pageNumber = pageNumbers[k]
            this.countCrawling += 1
            console.log(this.countCrawling);
            this.submitForm()
            await this.timer(1000);
          }
        }
      }
    }
 
    async crawlingData(text: string, type: string, location: string, pageNumber: number) {

      console.log(`https://api-app.map4d.vn/map/v2/search/place?types=${type}&location=${location}&pageNumber=${pageNumber}&pageSize=100&text=${text}`)
      this.http.get<any>(`https://api-app.map4d.vn/map/v2/search/place?types=${type}&location=${location}&pageNumber=${pageNumber}&pageSize=100&text=${text}`).subscribe(res => {
        if (res.result == null) {
          this.isShowResult = false
          this.count = 0 
          return
        }

        const result = res.result

        if (result.count == null || result.data == null || result.data.length == 0) {
          this.isShowResult = false
          this.count = 0 
          return
        }

        this.isShowResult = true
        const count = result.count
        this.count = count 
        const data = result.data
        console.log("data: ", data)
        this.uploadDataToFB(data)
      })
    }

    uploadDataToFB(list: any[]) {
      list.forEach(data => {
        const tutRef = this.db.object(data.id);
        tutRef.set({ data });     
      });
    }
    
    submitForm() {
      this.isShowResult = false
      this.count = 0  
      this.crawlingData(this.textSearch,this.type,this.location,this.pageNumber)
    }
  }
