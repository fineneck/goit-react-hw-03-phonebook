import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <form>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </form>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};
