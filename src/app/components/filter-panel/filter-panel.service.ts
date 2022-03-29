import { FilterPanelData } from "./filter-panel-data.model";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterPanelService {

  private _filterPanelData = new BehaviorSubject<FilterPanelData>({
    status: "doing",
  });

  constructor() { }

  get filterPanelData(): FilterPanelData {
    return this._filterPanelData.value;
  }

  set filterPanelData(filterPanelData: FilterPanelData) {
    this._filterPanelData.next(filterPanelData);
  }
}
