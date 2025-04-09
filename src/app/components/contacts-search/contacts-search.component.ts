import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-contacts-search',
  imports: [],
  templateUrl: './contacts-search.component.html',
  styleUrl: './contacts-search.component.scss',
})
export class ContactsSearchComponent {
  public search: WritableSignal<boolean> = signal(false);

  public searchService: SearchService = inject(SearchService);
}
