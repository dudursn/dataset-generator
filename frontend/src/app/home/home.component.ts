import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingSet } from 'app/models/training-set';
import { GenerateService } from 'app/services/generate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GenerateService],
})
export class HomeComponent implements OnInit, OnDestroy {

  /**
   * The list of data.
   */
  data: TrainingSet;

  subscription: Subscription;

  /**
   * Constructor.
   *
   * @param generateService provides an interface for accessing the training set generated for training conversational systems
   */
  constructor( private generateService: GenerateService) {
    this.subscription = new Subscription();
    //this.data = new TrainingSet([], 0);
  }

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Life cycle hook. Called when a directive, pipe, or service is destroyed.
   *
   * Unsubscribes from all library services.
   */
  ngOnDestroy(): void {
    
  }

  /**
   * Loads the dataset generated for training conversational systems.
   */
  loadData() {
    this.generateService.getTrainDataset(10).subscribe( (data) => {
      this.data = data;
      console.log(data);
    });     

  }


}
