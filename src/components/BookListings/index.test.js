import React from 'react';
import BookListings from './index';
import renderer from 'react-test-renderer';

const data = [{
  book_title: 'Test Book',
  book_author: ["Test Author"],
  book_pages: 123,
  book_publication_city: 'Test City',
  book_publication_country: 'Test Country',
  book_publication_year: 1234,
  id: 2468
}]

test('Correctly Renders Book Listing component', () => {
  const component = renderer.create(
    <BookListings books={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});