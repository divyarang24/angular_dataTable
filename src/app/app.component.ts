import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductserviceService } from './service/productservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getdata';
  data = "divya";
  S_no : any;
  Wallet_Address :any;
  Twitter_ID:any;

  users: any;
  p: number = 1;
  new: any = [];
  searchText :any;


  constructor(private Productdata: ProductserviceService ) {
    

  }
  ngOnInit(){
    this.getdata();
  }

  getdata(){
     this.Productdata.users().subscribe((data) => {
      this.users = data; 
      console.log(this.users);
      this.new = data;
      console.log(this.new);

    })

  }

  checkboxArray: any = [
    {
      id: 1,
      type: "checkbox",
      status: "Running",
    },
    {
      id: 1,
      type: "checkbox",
      status: "winner",
    }
    ,
    {
      id: 1,
      type: "checkbox",
      status: "failed",
    }
  ]

  tempArray: any = [];
  newArray: any = [];


  onchange(event: any) {
    if (event.target.checked) {
      
      
      this.tempArray = this.new.filter((e: any) => e.Status  == event.target.value)
      
      this.users = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.users.push(obj);
          
        }
      }
    }
    else {
      this.tempArray = this.users.filter((e: any) => e.Status != event.target.value )

      this.newArray = [];
      this.users = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.users.push(obj);
        }
      }
    }
    console.log("This is my condition : ",event.target.checked);
    console.log("This is my condition this.users.length : ",this.users.length);
    
    if (this.users.length == 0){
      console.log("Hi im here");
      this.getdata();
    }
    console.log(this.users);
    

  }

  

 
   key :string ='id';
   reverse: boolean = false;
   sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
   }

   
}
