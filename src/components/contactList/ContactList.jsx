import React from 'react';
import PropTypes from 'prop-types';
import { Li, P, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id}>
        <P>
          {name}: {number}{' '}
        </P>{' '}
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </Li>
    ))}{' '}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
