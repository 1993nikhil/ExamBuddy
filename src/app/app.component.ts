import { Component, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import{MediaObserver,MediaChange} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExamBuddy';
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(public mediaObserver:MediaObserver){
     
  }
  ngOnInit(){
    this.mediaSub= this.mediaObserver.media$.subscribe((result:MediaChange) =>{      
      this.deviceXs = result.mqAlias==="xs"?true:false;
      console.log(this.deviceXs);
     })
  }
  ngOnDestroy(){
this.mediaSub.unsubscribe();
  }
}
