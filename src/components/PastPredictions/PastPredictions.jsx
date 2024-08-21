import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PastPredictions.css';

const PastPredictions = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/predictions', {
          headers: {
            'Authorization': `Bearer ${token}`, 
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
  
  const getPredictionResult = (value) => {
    // Convert the value to a number
    const numericValue = Number(value);

    // Log the numeric value for debugging purposes
    console.log('Numeric Prediction value:', numericValue);

    // Handle the cases based on the numeric value
    if (numericValue === 0) {
      return "You don't have heart disease risk";
    } else if (numericValue === 1) {
      return "You have heart disease risk";
    } else {
      return "Unknown prediction result";
    }
  };

  return (
    <div className="predictions-container">
      <h2>Your Past Predictions</h2>
      {predictions.length > 0 ? (
        <div className="predictions-grid">
          {predictions.map((prediction, index) => (
            <div className="prediction-card" key={index}>
              <div className="prediction-detail">
                <span className="detail-title">Age:</span>
                <span className="detail-value">{prediction.age}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Gender:</span>
                <span className="detail-value">{prediction.sex}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Chest Pain Type:</span>
                <span className="detail-value">{prediction.cp}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Resting Blood Pressure:</span>
                <span className="detail-value">{prediction.trestbps}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Cholesterol:</span>
                <span className="detail-value">{prediction.chol}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Fasting Blood Sugar above 120 mg/dL:</span>
                <span className="detail-value">{prediction.fbs}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Max Heart Rate:</span>
                <span className="detail-value">{prediction.thalach}</span>
              </div>
              <div className="prediction-result">
                {getPredictionResult(prediction.prediction)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-predictions">No past predictions found.</div>
      )}
    </div>
  );
};

export default PastPredictions;