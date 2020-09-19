import { Observable } from '../../../node_modules/rxjs';

export abstract class AppGateway {
  abstract addLeadInformation(leadInfo): Observable<any>;
  abstract updateTimeSlot(timeSlot): Observable<any>;
}
