import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LabelClassification } from 'app/models/label-classification';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class LabelClassificationService {

  /**
   * API URL retrieved from the environment.
   */
  apiURL: string;

  /**
  * Constructor.
  *
  * @param httpClient necessary service to perform HTTP requests to the API
  * @param environmentService provides an interface to access the environment variables injected in the app
  */
  constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) {
    this.apiURL = this.environmentService.getValue('apiUrl') + '/labels';
  }

  /**
  * Retrieves all labels classification.
  *
  * @returns an Observable of LabelClassications array
  */
  public getLabelClassifications(): Observable<LabelClassification[]> {
   
    return new Observable<LabelClassification[]>((subscriber) => {
      this.httpClient
        .get<any[]>(`${this.apiURL}`)
        .subscribe({
          next: (result) => {
            subscriber.next(LabelClassification.getLabelClassifications(result));
          },
          error: (error) => {
            subscriber.error(error);
          },
          complete: () => {
            subscriber.complete();
          }
      });
    });
  }
}
