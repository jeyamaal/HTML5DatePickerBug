import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule, NgForm,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   public personalForm:FormGroup;
 
  constructor(private fb:FormBuilder){
  
    this.personalForm=this.fb.group({
      'radioCiviStatus': new FormControl('Single'), 
      'spouseName': new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
      'spouseOccupation': new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
      'spouseContact': new FormControl('',[Validators.required,Validators.pattern("^[0-9+]*$")])
    });

  }  

   
  onSubmit() {
    console.log(this.personalForm);
}
   
    // Radio button Selection 
    private selectedLink: string = "";

    setradio(e: string): void {
      this.selectedLink = e;
    }
    isSelected(name: string): boolean {
      if (this.selectedLink === "Married") {
        return true;
      }
      
      return false;
    }  

}
