import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-contacts-details',
  imports: [],
  templateUrl: './contacts-details.component.html',
  styleUrl: './contacts-details.component.scss',
})
export class ContactsDetailsComponent implements OnInit {
  public searchService: SearchService = inject(SearchService);
  public searchTerm: WritableSignal<string> = this.searchService.searchTerm;

  public ngOnInit(): void {
    this.searchService.loadContacts();
  }
}
