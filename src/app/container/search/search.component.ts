import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = '';
  @ViewChild('searchInput') searchInputEl: ElementRef;

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
      // this.searchText = event.target.value;
    this.searchTextChanged.emit(this.searchText);
  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText);
  }

}
