import React from 'react';
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search = ({onType}) => {
  return (
    <Form inline>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Search for a book..." onChange={(e) => onType(e.target.value)}/>
      </Form.Group>
    </Form>
  );
}
Search.propTypes = {
  onType: PropTypes.func,
}
export default Search;