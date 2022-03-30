import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  
  idSelected: number;
  titleSelected = '';
  statusSelected = 'doing';


  statuses = [
    {viewValue: 'Todas', value: 'all'},
    {viewValue: 'Em andamento', value: 'doing'},
    {viewValue: 'Resolvida', value: 'done'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() emitId = new EventEmitter<number>();
  @Output() emitTitle = new EventEmitter<string>();
  @Output() emitStatus = new EventEmitter<string>();

  changeIdFilter() {
    this.emitId.emit(this.idSelected);
  }

  changeTitleFilter() {
    this.emitTitle.emit(this.titleSelected);
  }

  changeStatusFilter() {
    this.emitStatus.emit(this.statusSelected);
  }

}
