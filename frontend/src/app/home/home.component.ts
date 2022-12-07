import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LabelClassification } from 'app/models/label-classification';
import { TrainingSet } from 'app/models/training-set';
import { GenerateService } from 'app/services/generate.service';
import { LabelClassificationService } from 'app/services/label-classification.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GenerateService, LabelClassificationService],
})

export class HomeComponent implements OnInit, OnDestroy {

  /**
   * The list of data generated.
   */
  data: TrainingSet;

  /**
   * The list of data filtered.
   */
  dataAux: TrainingSet;

  /**
   * Array with all labels classifications in dataset.
   */
  labelClassifications: LabelClassification[];

   /**
   * The dataset's name
   */
  datasetName: string;
  
  /**
   * The number of samples to be generated.
   */
  numberOfSamples: number;

  /**
   * The search to filter the data by utterance.
   */
  searchString: string = "";
  /**
   * The selected option to filter the data by label Classification.
   */
  selectedLabelClassification: string = "";

  /**
   * The columns names to fill table.
   */
  columns: string[];

  /**
   * Constructor.
   *
   * @param generateService provides an interface for accessing the training set generated for training conversational systems
   * @param labelClassificationService provides an interface for accessing all labels classifications in dataset
   */
  constructor(private generateService: GenerateService, private labelClassificationService: LabelClassificationService) { 
    this.data = new TrainingSet([], 0);
    this.dataAux = this.data;
  }

  /**
   * Life cycle hook. Called when a directive, pipe, or service is initialized.
   * 
   */
  ngOnInit(): void {
    this.datasetName = "RDF-Dataset/Test/generate";
    this.numberOfSamples = 5;
    this.columns = ["Code", "Utterance", "Label Classification"];
    this.getLabelsClassificationForCombobox();
  }

  /**
   * Life cycle hook. Called when a directive, pipe, or service is destroyed.
   * 
   */
  ngOnDestroy(): void {
    
  }

  /**
   * Loads the dataset generated for training conversational systems.
   * 
   */
  getDataGenerated() {
    this.generateService.getTrainDataset(this.numberOfSamples).subscribe( (data) => {
      this.data = data;
      this.dataAux = Object.assign({}, this.data);
    });      
  }

   /**
   * Loads all labels classifications for fill the selectbox.
   */
  getLabelsClassificationForCombobox() {
    this.labelClassificationService.getLabelClassifications().subscribe( (data) => {
      this.labelClassifications = data;
    });   
  }

  /**
   * Bind click event to generate dataset for training conversational systems.
   * 
   * @param dataForm the form data
   */
  onClickSubmit(dataForm) {
    this.numberOfSamples = dataForm.numberOfSamples;
    this.getDataGenerated();
  }

   /**
   * Bind click event to filter dataset for training conversational systems.
   * 
   * @param dataForm the form data
   */
  onClickFilterSearch(dataForm) {
    console.log(dataForm);
    this.dataAux.utterances = this._filterItems(this.data.utterances, dataForm.searchString, dataForm.selectedLabelClassification);
  }

  /**
   * Export to csv the dataset generated for training conversational systems.
   * 
   */
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

  /**
   * Clear the data generated.
   * 
   */
  clearSearch() {
    //this.data = new TrainingSet([], 0);
    this.dataAux = Object.assign({}, this.data);
    this.searchString = "";
    console.log('clear');
  } 

  /**
   * Scroll to the target element.
   * 
   * @param el target element to scroll
   */
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  /**
  * Filter the dataset generated for training conversational systems with the search string.
  * 
  * @param arr the dataset generated for training conversational systems
  * @param query the search string
  * @param label the label classification
  */
  _filterItems(arr, query, label) {
    
    let result = (query !==undefined && query.trim() !=='') ? 
      arr.filter((el) => el.utterance.toLowerCase().includes(query.toLowerCase())) : arr;
    
    result = (label !==undefined && label.trim() !=='') ? 
      arr.filter((el) => el.labelClassification.initials.toLowerCase().includes(label.toLowerCase())) : result;
      
    return result;
  }

}
