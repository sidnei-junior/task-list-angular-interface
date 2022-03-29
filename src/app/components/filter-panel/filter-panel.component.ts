import { Component, OnInit } from '@angular/core';
import { FilterPanelService } from './filter-panel.service';

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

  constructor(private filterPanelService: FilterPanelService) {
    filterPanelService.filterPanelData = {
      status: this.statusSelected
    }
   }

  ngOnInit(): void {
  }

  changeStatusFilter() {
    this.filterPanelService.filterPanelData = {
      status: this.statusSelected
    }
    console.log(this.statusSelected)
  }

}
