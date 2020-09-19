import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppGateway } from '../app-gateway/app-gateway';

@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.scss']
})
export class BookSessionComponent implements OnInit {
  isActive: boolean;
  selectedTime: string;
  slotBooked: boolean;
  profileForm = new FormGroup({
    mobileNumber: new FormControl(''),
    nameOfLead: new FormControl(''),
    leadType: new FormControl('')
  });

  constructor( private appGateway: AppGateway) {
    this.slotBooked = false;
    this.isActive = false;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit value', this.profileForm.value);
    const data = {
      type: this.profileForm.value.leadType,
      exam: 'IITJEE',
      mobile: this.profileForm.value.mobileNumber,
      name: this.profileForm.value.nameOfLead,
      emailId: '',
      timeSlot: '',
    };
    this.isActive = true;
    console.log('Post Json object', data);
    this.appGateway.addLeadInformation(data).subscribe((response) => {
      console.log('Requesting post request for adding lead');
    });
  }
  savePreferredtime(time: string){
    console.log(time);
    this.selectedTime = time;
    this.slotBooked = true;
    this.appGateway.addLeadInformation(time).subscribe((response) => {
      console.log('Requesting post request for adding lead');
    });
  }
}
