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
  public isMobile = false;
  isActive: boolean;
  selectedTime: string;
  slotBooked: boolean;
  selectedLeadType = 's';
  seqId: number;
  profileForm = new FormGroup({
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{10}')]),
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
    if (this.profileForm.invalid){
      return false;
    }
    const data = {
      type: this.profileForm.value.leadType,
      exam: 'IITJEE',
      mobile: this.profileForm.value.mobileNumber,
      name: this.profileForm.value.nameOfLead,
      emailId: '',
      timeSlot: '',
    };
    console.log('Post Json object', data);
    this.appGateway.addLeadInformation(data).subscribe((response) => {
      if (response) {
        this.seqId = response.id;
        this.isActive = true;
      }
    });
  }
  savePreferredtime(time: string) {
    console.log(time);
    this.selectedTime = time;
    this.slotBooked = true;
    const data = {
      id: this.seqId,
      preferredSlot: time
    };
    this.appGateway.updateTimeSlot(data).subscribe((response) => {
      console.log('timeSlot saved lead');
    });
  }
}
