import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './section';
// import { Container } from 'utils';
import { ContactForm } from './contactsForm';
import { ContactList } from './contactList';

// import { ContactForm } from '../contactForm/ContactForm';
// import { ContactList } from '../contactList/ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = ({ id, name, number }) => {
    console.log({ id, name, number });

    // const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmit} />
        </Section>
        <Filter />
        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>

        {/* <ContactForm  />         */}

        {/* <Section title="Contacts"><ContactList /></Section> */}
      </div>
    );
  }
}
