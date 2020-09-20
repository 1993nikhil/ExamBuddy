import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppGateway } from '../app-gateway/app-gateway';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.scss']
})
export class BookSessionComponent implements OnInit {
  public isMobile: boolean = false;
  isActive: boolean;
  selectedTime: string;
  slotBooked: boolean;
  selectedLeadType="s";
  profileForm = new FormGroup({
    mobileNumber: new FormControl('', [Validators.required,Validators.pattern("[0-9 ]{10}")]),
    nameOfLead: new FormControl('', Validators.required),
    leadType: new FormControl('', Validators.required)
  });


  constructor(private appGateway: AppGateway, breakpointObserver: BreakpointObserver) {
    this.slotBooked = false;
    this.isActive = false;
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
      console.log(this.isMobile);
    });
  }




  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit value', this.profileForm);
    if(this.profileForm.invalid){
      return false;
    }
    
    const data = {
      leadType: this.profileForm.value.leadType,
      exam: 'IITJEE',
      leadMobileNumber: this.profileForm.value.mobileNumber,
      leadName: this.profileForm.value.nameOfLead,
    };
    this.isActive = true;
    console.log('Post Json object', data);
    this.appGateway.addLeadInformation(data).subscribe((response) => {
      console.log('Requesting post request for adding lead');
    });
  }
  savePreferredtime(time: string) {
    console.log(time);
    this.selectedTime = time;
    this.slotBooked = true;
    this.appGateway.addLeadInformation(time).subscribe((response) => {
      console.log('Requesting post request for adding lead');
    });
  }
}
