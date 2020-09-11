import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppGateway } from '../app-gateway/app-gateway';

@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.scss']
})
export class BookSessionComponent implements OnInit {
  profileForm = new FormGroup({
    mobileNumber: new FormControl(''),
    nameOfLead: new FormControl(''),
    leadType: new FormControl('')
  });
  constructor(
    private appGateway: AppGateway
   ) {
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit value', this.profileForm.value);
    const data = {
      leadType: this.profileForm.value.leadType,
      exam: 'IITJEE',
      leadMobileNumber: this.profileForm.value.mobileNumber,
      leadName: this.profileForm.value.nameOfLead,
    };
    console.log('Post Json object', data);
    this.appGateway.addLeadInformation(data).subscribe((response) => {
      console.log('Requesting post request for adding lead');
    });
  }
}
