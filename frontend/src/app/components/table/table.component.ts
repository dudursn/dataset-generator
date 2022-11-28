import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  /**
   * Data to fill the table component
   * 
  */
  @Input() dataSource: any;

   /**
   * Column's name the table component
   * 
  */
  @Input() columnNames: string[];  

   /**
   * Constructor.
   */
  constructor() {
    
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
      //console.log(this.dataSource);

  }

}
