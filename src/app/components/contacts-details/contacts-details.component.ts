import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactDataService } from '../../services/contact-data/contact-data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contacts-details',
  imports: [],
  templateUrl: './contacts-details.component.html',
  styleUrl: './contacts-details.component.scss',
})
export class ContactsDetailsComponent implements OnInit {
  public searchTerm: InputSignal<string> = input<string>('');

  private destroyRef = inject(DestroyRef);

  private contactDataService: ContactDataService = inject(ContactDataService);

  public contacts: WritableSignal<Contact[]> = signal<Contact[]>([]);

  public ngOnInit(): void {
    this.contactDataService
      .getContacts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((contacts: Contact[]) => {
        this.contacts.set(contacts);
      });
  }

  public filteredContacts = computed(() => {
    if (!this.searchTerm()) {
      return this.contacts();
    }

    return this.contacts().filter((contact: Contact) =>
      contact.name.toLowerCase().includes(this.searchTerm().toLocaleLowerCase())
    );
  });
}
