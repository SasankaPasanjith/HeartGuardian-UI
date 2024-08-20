import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PastPredictions.css';

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
    <div className="predictions-container">
      <h2>Your Past Predictions</h2>
      {predictions.length > 0 ? (
        <div className="predictions-list">
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
                <span className="detail-title">Fasting Blood Sugar 120 mg/dL:</span>
                <span className="detail-value">{prediction.fbs}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Max Heart Rate:</span>
                <span className="detail-value">{prediction.thalach}</span>
              </div>
              <div className="prediction-detail prediction-result">
                <span className="detail-title">Prediction:</span>
                <span className="detail-value">{prediction.prediction}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No past predictions found.</p>
      )}
    </div>
  );
}

export default PastPredictions;