import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PastPredictions.css'

const PastPredictions = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
      const fetchPredictions = async () => {
          try {
              const token = localStorage.getItem('token');
              console.log('Token:', token);
              const response = await axios.get('http://localhost:5000/predictions', {
                  headers: {
                      'Authorization': `Bearer ${token}`,  // Ensure correct token format
                  }
              });
              
              const { data } = response.data; 
              setPredictions(data.predictions || []); 
          } catch (error) {
              console.error('Error fetching predictions:', error);
              setPredictions([]);
          }
      };

      fetchPredictions();
  }, []);
  
  return (
    <div className="past-predictions-container">
      <h2 className="title">Your Past Predictions</h2>
      {predictions.length > 0 ? (
        <div className="predictions-grid">
          {predictions.map((prediction, index) => (
            <div className="prediction-card" key={index}>
              <p><strong>Age:</strong> {prediction.age}</p>
              <p><strong>Gender:</strong> {prediction.sex}</p>
              <p><strong>Chest Pain Type:</strong> {prediction.cp}</p>
              <p><strong>Resting Blood Pressure:</strong> {prediction.trestbps}</p>
              <p><strong>Cholesterol:</strong> {prediction.chol}</p>
              <p><strong>Fasting Blood Sugar 120 mg/dL:</strong> {prediction.fbs}</p>
              <p><strong>Max Heart Rate:</strong> {prediction.thalach}</p>
              <p><strong>Prediction:</strong> {prediction.prediction}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-predictions">No past predictions found.</p>
      )}
    </div>
  );
}

export default PastPredictions;
