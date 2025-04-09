import {
  computed,
  DestroyRef,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { Contact } from '../../models/contact';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactDataService } from '../contact-data/contact-data.service';

@Injectable()
export class SearchService {
  private destroyRef = inject(DestroyRef);

  private contactDataService: ContactDataService = inject(ContactDataService);

  public searchTerm: WritableSignal<string> = signal<string>('');

  private contacts: WritableSignal<Contact[]> = signal<Contact[]>([]);

  public filteredContacts = computed(() => {
    if (!this.searchTerm()) {
      return this.contacts();
    }

    return this.contacts().filter((contact: Contact) =>
      contact.name.toLowerCase().includes(this.searchTerm().toLocaleLowerCase())
    );
  });

  public updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  public loadContacts(): void {
    this.contactDataService
      .getContacts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((contacts: Contact[]) => {
        this.contacts.set(contacts);
      });
  }
}
