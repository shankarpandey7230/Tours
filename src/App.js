import './index.css';
import React, { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = () => {};
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="App">
      <Loading />
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
