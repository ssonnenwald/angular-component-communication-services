import { Component, signal, WritableSignal } from '@angular/core';
import { ContactsSearchComponent } from '../contacts-search/contacts-search.component';
import { ContactsDetailsComponent } from '../contacts-details/contacts-details.component';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-contacts',
  imports: [ContactsSearchComponent, ContactsDetailsComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  providers: [SearchService],
})
export default class ContactsComponent {
  public searchTerm: WritableSignal<string> = signal('');
}
