import PropTypes from 'prop-types';
import { Container } from "utils";

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <h1>{title}</h1>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
