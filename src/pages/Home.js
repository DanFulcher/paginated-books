import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import useBooks from '../hooks/useBooks';

import Search from '../components/Search';
import BookListings from '../components/BookListings';
import Pagination from '../components/Pagination';

const Home = () => {
  const location = useLocation();
  const history = useHistory(); 
  const path = window.location.pathname;
  const initialQueryString = queryString.parse(location.search);
  const initialPageNumber = parseFloat(initialQueryString.page) || 1;

  const {data, loading, fetchBooks} = useBooks();
  const [page, setPage] = useState(initialPageNumber);
  const lastPage = data ? Math.ceil(data.count / 12) : 0;
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    history.push(`${path}?page=${page}`);
  }, []);

  useEffect(() => {
    fetchBooks(page, searchTerm);
  }, [page, searchTerm]);

  useEffect(() => {
    if (page > 0) {
      history.push(`${path}?page=${page}`);
    }
  }, [page, history, path]);
  const handleSearch = (value) => {
    setSearchTerm(value);
    setPage(1);
  }
  console.log(data);
  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col xs={12} sm={6}>
          <h1>{`Dan's Books`}</h1>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-end">
          <Search onType={(value) => handleSearch(value)} />
        </Col>
      </Row>
      {data && !loading && data.books.length ? (
        <>
          <Pagination onNext={() => setPage(page+1)} onPrev={() => setPage(page-1)} page={page} lastPage={lastPage} />
          <BookListings books={data.books} />
          <Pagination onNext={() => setPage(page+1)} onPrev={() => setPage(page-1)} page={page} lastPage={lastPage} />
        </>
      ) : loading ? (
        <Row className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </Row>
      ) : (
        <Row className="d-flex justify-content-center">
          <h2>No books</h2>
        </Row>
      )}
    </Container>
  );
}

export default Home;
