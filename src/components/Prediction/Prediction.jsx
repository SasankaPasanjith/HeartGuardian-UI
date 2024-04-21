import React, { useState } from 'react'
import axios from 'axios'
import './Prediction.css'

function Prediction() {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        thalach: ''
      });

      const [predictionResult, setPredictionResult] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post("http://127.0.0.1:5000/predict", formData);
            const prediction = response.data.prediction;
            if (prediction === 0) {
              setPredictionResult("You don't have a risk of heart disease.");
            } else { // Handle any other prediction value (including 1)
              setPredictionResult('You have a high risk of heart disease.');
            }
            setErrorMessage('');
          /*try {
              const response = await axios.post("http://127.0.0.1:5000/predict", formData);
              const prediction = response.data.prediction;
              if (prediction === 0) {
                  setPredictionResult("You don't have a risk of heart disease.");
              } else if (prediction === 1) {
                  setPredictionResult('You have a high risk of heart disease.');
              } else {
                  setPredictionResult('Unable to make a prediction.');
              }
              setErrorMessage('');*/
          } catch (error) {
              console.error('Prediction failed:', error);
              setErrorMessage('Failed to connect to the prediction server.');
              setPredictionResult('');
          }
      }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor="age">Age:</label>
    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />

    <label htmlFor="sex">Gender:</label>
    <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required>
      <option value="" hidden>Select</option>
      <option value="0">Female</option>
      <option value="1">Male</option>
    </select>

    <label htmlFor="cp">Chest Pain Type:</label>
    <select id="cp" name="cp" value={formData.cp} onChange={handleChange} required>
      <option value="" hidden>Select</option>
      <option value="0">atypical angina</option>
      <option value="1">typical angina</option>
      <option value="2">asymptomatic</option>
      <option value="3">nonanginal pain</option>
    </select>

    <label htmlFor="trestbps">Resting Blood Pressure (Between 94-200 mm Hg):</label>
    <input type="number" id="trestbps" name="trestbps" value={formData.trestbps} onChange={handleChange} min="94" max="200" required />

    <label htmlFor="chol">Cholesterol (Between 126-564 mg/dl):</label>
    <input type="number" id="chol" name="chol" value={formData.chol} onChange={handleChange} min="126" max="564" required />

    <label htmlFor="fbs">Fasting Blood Sugar &gt; 120 mg/dL:</label>
    <select id="fbs" name="fbs" value={formData.fbs} onChange={handleChange} required>
      <option value="" hidden>Select</option>
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>

    <label htmlFor="thalach">Maximum Heart Rate Achieved (Between 71 - 202):</label>
    <input type="number" id="thalach" name="thalach" value={formData.thalach} onChange={handleChange} min="71" max="202" required />

    <button type="submit">Predict</button>
  </form>

{errorMessage && <p className="error-message">{errorMessage}</p>}
{predictionResult && <p className="result">{predictionResult}</p>}
</div>
);
}

export default Prediction