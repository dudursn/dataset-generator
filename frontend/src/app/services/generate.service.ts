// See Copyright Notice in the LICENSE file for details
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingSet } from 'app/models/training-set';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

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
    this.apiURL = this.environmentService.getValue('apiUrl') + '/generate';
  }

  /**
   * Retrieves the dataset generated for training conversational systems.
   *
   * @param totalSamples the total number of conversations to be generated 
   * @returns an Observable of TrainingSets array
   */
   public getTrainDataset(totalSamples: number): Observable<TrainingSet[]> {
    return new Observable<TrainingSet[]>((data) => {
      this.httpClient
        .get<TrainingSet[]>(`${this.apiURL}/${totalSamples}`)
        .subscribe({
          next: (trainingSets) => {
            data.next(TrainingSet.getTrainingSets(trainingSets));
          },
          error: (error) => {
            data.error(error);
          },
          complete: () => {
            data.complete();
          }
        });
    });
  }

}
