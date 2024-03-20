import React, { useState } from 'react';
import Container from './Container';
import Card from './Card';
import Form from './Form';
import Location from './Location';
import api from './api';

function search() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
  });

  const searchLocation = (query) => {
    API.search(query)
      .then((res) => setSearchData({ ...searchData, results: res.data }))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // When the form is submitted, search the API for the value of `searchData.search`
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchLocation(searchData.search);
  };

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card
            heading={searchData.results.Title || 'Search for a Location'}
          >
            {searchData.results.Title ? (
              <Detail
                title={searchData.results.Title}
                Location={searchData.results.Location}
                Income={searchData.results.Income}
                Expenses={searchData.results.Expenses}
              />
            ) : (
              <h3> Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={searchData.search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default search;
