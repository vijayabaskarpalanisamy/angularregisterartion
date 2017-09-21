import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { Register } from './register';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegisterService]
})
export class AppComponent implements OnInit {
  title = 'Register';
  myForm: any;
  reg: Register;
  model = new Register();
  chgid:number;

  constructor(public regService: RegisterService) { }

  ngOnInit() {
    this.getMethod();
}
getMethod() {
    this.regService.getDetails()
      .subscribe(reg => {
        this.reg = reg;
      })
  }

  addStudent() {
    if (!this.model.id){
    this.regService.addmethod(this.model)
      .subscribe(reg => {
        this.model = reg;
        this.getMethod();
        this.clearModel();
      });
    }
    else {
      console.log('editmethod ' + this.model.id);
       this.regService.updatemethod(this.model.id,this.model)
      .subscribe(reg => {
        this.model = reg;
        this.getMethod();
        this.clearModel();
      });
    }
  }

  deletemethod(id) {
    this.regService.deletemethod(id)
      .subscribe(() => {
        this.getMethod();
      });
  }

  editmethod(id){
    console.log('updatemethod ' + id);
    this.regService.getData(id)
        .subscribe(regs=>{
          this.model = regs;
        });
  }
/*
 getOne(id){
    this.regService.getData(id)
        .subscribe(reg=>{
          this.model = reg;
        })
}*/

clearModel(){
 this.model.id=0;
 this.model.name="";
this.model.department="";
 this.model.city="";
 this.model.phoneno="";
 this.model.email="";

}

}
