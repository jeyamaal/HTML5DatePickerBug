import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public personalForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.personalForm = this.fb.group({
      radiojobapply: [''],
      jobRole: [{ value: '', disabled: true }, [Validators.required]],
      applyDate: [{ value: '', disabled: true }, [Validators.required]],
      applyDate1: ['']
    });

    this.personalForm.controls.radiojobapply.valueChanges
      .subscribe(value => {
        if (value === "yes") {
          this.personalForm.get('jobRole').enable();
          this.personalForm.get('applyDate').enable();
        } else {
          this.personalForm.get('jobRole').disable();
          this.personalForm.get('applyDate').disable();
          this.personalForm.controls.applyDate.value
        };
      });
  }

  ngAfterViewInit(){
    var today:any = new Date();
    var dd:any = today.getDate();
    var mm:any = today.getMonth()+1; //January is 0!
    var yyyy:any = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    today = yyyy + '-' + mm + '-' + dd;
    $("#applyDate").attr("min",today);
    $("#applyDate1").attr("min",today);

     

  }

  onSubmit() {
    console.log(this.personalForm);
  }

}
