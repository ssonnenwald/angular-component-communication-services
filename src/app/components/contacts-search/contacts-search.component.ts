import {
  Component,
  model,
  ModelSignal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-contacts-search',
  imports: [],
  templateUrl: './contacts-search.component.html',
  styleUrl: './contacts-search.component.scss',
})
export class ContactsSearchComponent {
  public search: WritableSignal<boolean> = signal(false);

  public searchTerm: ModelSignal<string | undefined> = model<string>();

  public ngOnInit(): void {}
}
