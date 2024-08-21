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
          },
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
    const numericValue = Number(value);
    if (numericValue === 0) {
      return "You don't have heart disease risk";
    } else if (numericValue === 1) {
      return "You have heart disease risk";
    } else {
      return "Unknown prediction result";
    }
  };

  const getGender = (value) => {
    return value === 0 ? "Female" : "Male";
  };

  const getChestPainType = (value) => {
    switch (value) {
      case 0:
        return "Atypical angina";
      case 1:
        return "Typical angina";
      case 2:
        return "Asymptomatic";
      case 3:
        return "Nonanginal pain";
      default:
        return "Unknown type";
    }
  };

  const getFastingBloodSugar = (value) => {
    return value === 0 ? "No" : "Yes";
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
                <span className="detail-value">{getGender(Number(prediction.sex))}</span>
              </div>
              <div className="prediction-detail">
                <span className="detail-title">Chest Pain Type:</span>
                <span className="detail-value">{getChestPainType(Number(prediction.cp))}</span>
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
                <span className="detail-value">{getFastingBloodSugar(Number(prediction.fbs))}</span>
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