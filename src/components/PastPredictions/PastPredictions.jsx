import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PastPrediction.css'

function PastPredictions() {
    const [predictions, setPredictions] = useState([]);
  
    useEffect(() => {
      const fetchPredictions = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('/api/predictions', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPredictions(response.data);
        } catch (error) {
          console.error('Failed to fetch predictions:', error);
        }
      };
  
      fetchPredictions();
    }, []);
  
    return (
      <div>
        <h2>Your Past Predictions</h2>
        {predictions.length > 0 ? (
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                <p>Age: {prediction.age}</p>
                <p>Gender: {prediction.sex}</p>
                <p>Chest Pain Type: {prediction.cp}</p>
                <p>Resting Blood Pressure: {prediction.trestbps}</p>
                <p>Cholesterol: {prediction.cholesterol}</p>
                <p>Fasting Blood Sugar 120 mg/dL: {prediction.fbs}</p>
                <p>Max Heart Rate: {prediction.maxHeartRate}</p>
                <p>Prediction: {prediction.predictionResult}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No past predictions found.</p>
        )}
      </div>
    );
  }
  
  export default PastPredictions;