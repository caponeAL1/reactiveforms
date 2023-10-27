import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  userList: any = [];
  http: any;
  addUser(udata:any)
  {
    // console.log(udata);
    // console.log(udata.value);
    // this.userList.push(udata.value);
    this.http.post('http://localhost:9901/insert',udata.value).
    subscribe((response: any)=>
    {
      console.log(response);
    })
  }
}
