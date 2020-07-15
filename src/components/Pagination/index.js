import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Pagination = ({onNext, onPrev, page, lastPage}) => {
  return (
    <Row className="mb-4">
      <Col xs={12} className="d-flex justify-content-between">
        <Button
            data-testid="prev"
            onClick={() => onPrev()}
            disabled={page === 1}
          >
            Prev Page
          </Button>
        <Button
          data-testid="next"
          onClick={() => onNext()}
          disabled={page === lastPage}
        >
          Next Page
        </Button>
      </Col>
    </Row>
  );
}

Pagination.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  page: PropTypes.number,
  lastPage: PropTypes.number,
}
export default Pagination;
