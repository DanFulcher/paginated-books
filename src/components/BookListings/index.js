import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-bootstrap';

const BookListings = ({books}) => {
  return (
    <Row>
      {books && books.map(book => (
        <Col key={book.id} xs={12} sm={6} md={4} className="mb-4">
          <Card key={`book-${book.id}`} className="w-100 h-100">
            <Card.Body>
              <Card.Title>{book.book_title}</Card.Title>
              <Card.Text>
                {book.book_author.map(bookAuthor => bookAuthor)}
              </Card.Text>
              <Card.Text>Book pages: {book.book_pages}</Card.Text>
              <Card.Text>
      Publication in: {book.book_publication_city}, {book.book_publication_country}({book.book_publication_year})
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
BookListings.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
}

export default BookListings;
