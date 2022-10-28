import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotFoundError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'myapp';
  //firstname ="Rohith"
  //lastname="Reddybathini"
  employeename : string ="";
  employeenumber : string ="";
  password : string ="";
  email : string="";
  check=0
  search :string='';
  names : string[] = [];
  //details : string[] = [];
  pack :string[] =[];
  index=0;
  shownumber="hi"
  showemail="@gmail"
  delete : string ='';
  deleteflag : boolean | undefined;




  submit(){
    console.log("form submited")
  }
  onSubmit(){
    this.check=0;
    console.log("submitted")
    console.log("username: ",this.employeename);
    console.log("usernumber: ",this.employeenumber);
    console.log("email: ",this.email);
    localStorage.setItem(this.employeename,this.employeenumber)
    console.log(localStorage.getItem(this.employeename))
    
    
    if(this.duplicate()){
        
  
    this.names.push(this.employeename)
    console.log(this.names);
    this.pack.push(this.employeenumber,this.email)
    console.log(this.pack);
      } 
    
    //this.details.push(this.pack)
    //console.log(this.details);
    this.employeename=''
    this.employeenumber=''
    this.password=''
    this.email=''
    //this.onsearch();
    
  }

  duplicate(){
    for (var rec of this.names){
      if(rec==this.employeename){
        return false
      }
    }return true
  }

  onSearch(){
    this.index=0;
    console.log("on search is caling");
    if(this.found()){
    this.check=1
    this.index=this.index*2;
    console.log('before shownumber: ',this.shownumber);
    console.log("beforeshowemail: ",this.showemail);
    this.shownumber=this.pack[this.index]
    console.log('shownumber: ',this.shownumber);
    this.showemail=this.pack[this.index+1]
    console.log("showemail: ",this.showemail);
    
    
    }
    else{
      this.check=2
    }
  }
  found()
  {
    
    for (var val of this.names) {
     
      if(val==this.search){
        console.log("search found");
        
        return true
      }
      this.index=this.index+1
    }
    console.log("serach not found");
    
    return false
  }

  onDelete(){
    this.index=0;
    for (var val of this.names) {
     
      if(val==this.delete){
        console.log("search found");
        this.names.splice(this.index,1);
        this.pack.splice(2*this.index,1)
        this.pack.splice(2*this.index,1)
        console.log("after deleting: ",this.names);
        console.log("after deleting: ",this.pack);
        
        
        this.deleteflag = true
        return
      }
      this.index=this.index+1
      
    }
    console.log("Unable To Delete");
    this.deleteflag= false;
    
  }

}
