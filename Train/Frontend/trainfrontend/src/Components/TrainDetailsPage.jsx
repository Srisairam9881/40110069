import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TrainDetailsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/train/trains')
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving train details:', error);
      });
  }, []);

  return (
    <div>
      <h1>Train Details</h1>
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h2>{train.trainName}</h2>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}:{train.departureTime.Seconds}</p>
          <p>Seats Available: Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</p>
          <p>Price: Sleeper: {train.price.sleeper}, AC: {train.price.AC}</p>
          <p>Delayed By: {train.delayedBy}</p>
        </div>
      ))}
    </div>
  );
}

export default TrainDetailsPage;
