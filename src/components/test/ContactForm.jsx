import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import { Container } from 'utils';
import { InputLabel, Input, ErrorText } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Contact name is required'),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

export const ContactForm = ({ addContact }) => {
  const onSubmit = ( value, { resetForm }) => {

    addContact({
      name: value.name,
      number: value.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <Container>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input type="text" name="name" required />
          <ErrorMessage
            name="name"
            component="div"
            render={message => <ErrorText>{message}</ErrorText>}
          />
          <InputLabel htmlFor="tel">Number</InputLabel>
          <Input type="tel" name="number" required />
          <ErrorMessage
            name="tel"
            component="div"
            render={message => <ErrorText>{message}</ErrorText>}
          />

          <button type="submit">Add contact</button>
        </Container>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
