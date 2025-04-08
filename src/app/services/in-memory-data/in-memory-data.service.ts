import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../../models/contact';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const contacts: Contact[] = [
      {
        id: 1,
        name: 'Abe Simpson',
        phone: '123-456-7890',
        email: 'asimpson@example.com',
      },
      {
        id: 2,
        name: 'Betty Rubble',
        phone: '216-121-8343',
        email: 'brubble@example.com',
      },
      {
        id: 3,
        name: 'Caitlin Stone',
        phone: '513-745-1312',
        email: 'cstone@example.com',
      },
      {
        id: 4,
        name: 'Daffy Duck',
        phone: '832-626-8311',
        email: 'dduck@example.com',
      },
      {
        id: 5,
        name: 'Elmer Fudd',
        phone: '723-225-7622',
        email: 'efudd@example.com',
      },
      {
        id: 6,
        name: 'Freddy Krueger',
        phone: '913-964-3344',
        email: 'fkrueger@example.com',
      },
      {
        id: 7,
        name: 'Gal Gadot',
        phone: '434-933-5555',
        email: 'ggadot@example.com',
      },
      {
        id: 8,
        name: 'Homer Simpson',
        phone: '467-993-7485',
        email: 'hsimpson@example.com',
      },
      {
        id: 9,
        name: 'Ilana Martinez',
        phone: '903-111-5345',
        email: 'imartinez@example.com',
      },
      {
        id: 10,
        name: 'Jay Smith',
        phone: '934-246-9442',
        email: 'jsmith@example.com',
      },
      {
        id: 11,
        name: 'Kat Power',
        phone: '715-499-3322',
        email: 'kpower@example.com',
      },
      {
        id: 12,
        name: 'Lee Majors',
        phone: '653-863-5476',
        email: 'lmajors@example.com',
      },
      {
        id: 13,
        name: 'Mark Hamill',
        phone: '313-445-1212',
        email: 'mhamill@example.com',
      },
      {
        id: 14,
        name: 'Ned Flanders',
        phone: '222-333-5555',
        email: 'nflanders@example.com',
      },
      {
        id: 15,
        name: 'Oliver Stone',
        phone: '121-513-0909',
        email: 'ostone@example.com',
      },
      {
        id: 16,
        name: 'Patty Johnson',
        phone: '263-789-0322',
        email: 'pjohnson@example.com',
      },
      {
        id: 17,
        name: 'Quincy Adams',
        phone: '712-521-6262',
        email: 'qadams@example.com',
      },
      {
        id: 18,
        name: 'Ralph Wigglesworth',
        phone: '932-711-4321',
        email: 'rwigglesworth@example.com',
      },
      {
        id: 19,
        name: 'Seymour Skinner',
        phone: '225-744-0136',
        email: 'sskinner@example.com',
      },
      {
        id: 20,
        name: 'Tina Fey',
        phone: '213-334-8642',
        email: 'tfey@example.com',
      },
      {
        id: 21,
        name: 'Ursula K. Le Guin',
        phone: '332-629-1111',
        email: 'uleguin@example.com',
      },
      {
        id: 22,
        name: 'Valentina Tereshkova',
        phone: '536-233-3217',
        email: 'vtereshkova@example.com',
      },
      {
        id: 23,
        name: 'Walter White',
        phone: '712-441-8080',
        email: 'wwhite@example.com',
      },
      {
        id: 24,
        name: 'Xena Washington',
        phone: '912-736-1298',
        email: 'xwashington@example.com',
      },
      {
        id: 25,
        name: 'Yolanda Sanchez',
        phone: '993-613-0378',
        email: 'ysanchez@example.com',
      },
      {
        id: 26,
        name: 'Zachary Smith',
        phone: '903-481-8011',
        email: 'zsmith@example.com',
      },
    ];

    return { contacts };
  }
}
