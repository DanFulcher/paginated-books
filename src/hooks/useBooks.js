import {useState} from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBooks = (page, searchTerm) => {
    setLoading(true);
    axios.post(`http://nyx.vima.ekt.gr:3000/api/books/`,
    {
      page,
      itemsPerPage: 12,
      filters: [{type: 'all', values: [searchTerm]}],
    })
      .then(res => {
        const resBooks = res.data;
        setData(resBooks);
        setLoading(false);
      })
  };
  return {
    data,
    loading,
    fetchBooks,
  };
}