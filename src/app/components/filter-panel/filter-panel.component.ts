import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  
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

  @Output() emitStatus = new EventEmitter<string>();

  changeStatusFilter() {
    this.emitStatus.emit(this.statusSelected);
  }
}
