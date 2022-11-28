import { Component, OnInit, OnDestroy } from '@angular/core';
import { LabelClassification } from 'app/models/label-classification';
import { TrainingSet } from 'app/models/training-set';
import { GenerateService } from 'app/services/generate.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GenerateService],
})
export class HomeComponent implements OnInit, OnDestroy {

  /**
   * The list of data generated.
   */
  data: TrainingSet;

   /**
   * The dataset's name
   */
  datasetName: string;
  
  /**
   * The number of samples to be generated.
   */
  numberOfSamples: number;

  /**
   * The columns names to fill table.
   */
  columns: string[];


  /**
   * Constructor.
   *
   * @param generateService provides an interface for accessing the training set generated for training conversational systems
   */
  constructor( private generateService: GenerateService) {
    this.data = new TrainingSet([], 0);
  }

  ngOnInit(): void {
    this.datasetName = "RDF-Dataset/Test/generate";
    this.numberOfSamples = 5;
    this.columns = ["Code", "Utterance", "Label Classification"];
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
  getData() {
    this.generateService.getTrainDataset(this.numberOfSamples).subscribe( (data) => {
      this.data = data;
      console.log(data);
    });     

  }

  onClickSubmit(data) {
    this.numberOfSamples = data.numberOfSamples;
    this.getData();
  }

  exportCSV() { 
    if(this.numberOfSamples > 0 && this.data.utterances.length > 0) {
      let utterances = this.data.utterances;
      const replacer = (key, value) => value === null ? '' : value;
      const header = Object.keys(utterances[0]);
      let csv = utterances.map(row => header.map(fieldName => {
       
        let fieldValue = row[fieldName]['initials'];
        if(fieldValue !== undefined) {
          return JSON.stringify(fieldValue, replacer);
        }
        return JSON.stringify(row[fieldName], replacer);
        
      }).join(','));
      csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');

      var blob = new Blob([csvArray], {type: 'text/csv' })
      saveAs(blob, `dataset - ${(new Date()).toTimeString()}.csv`);
    }else{
      alert('Please, generate the dataset first.');
    }
  }

  clearSearch() {
    this.data = new TrainingSet([], 0);
    console.log('clear');
  } 


}
