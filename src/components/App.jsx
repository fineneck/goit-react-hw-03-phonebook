import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from 'utils';
import { H1, H2, Warning } from './App.styled';
import { ContactForm } from './contactForm';
import { Filter } from './filter';
import { ContactList } from './contactList';

const initialContacts = [
  // { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  // { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  // { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  // { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const searchingName = name.toLowerCase();
    const foundName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === searchingName
    );

    if (foundName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getVisibleContacts();

    return (
      <Container>
        <H1>Phonebook</H1>
        <ContactForm onSubmit={this.addContact} />

        <H2>Contacts</H2>
        <Filter value={filter} onChange={this.changeFilter} />
        {this.state.contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Warning>Contact list is empty :(</Warning>
        )}
      </Container>
    );
  }
}
