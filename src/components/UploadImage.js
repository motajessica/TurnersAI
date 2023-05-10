import React from 'react';
import { useState } from 'react';
import { PREDICTION_KEY, IMAGE_PREDICTION_ENDPOINT } from '../config.js';

function getProbability(json) {
  const predictions = json.predictions;
  const maxProbability = Math.max(...predictions.map(prediction => prediction.probability));
  const prediction = predictions.find(prediction => prediction.probability === maxProbability);
  if (maxProbability >= 0.75) {
    return prediction.tagName;
  } else {
    return null;
  }
}

function UploadImage(props) {
  const [imageFile, setImageFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await fetch(
      IMAGE_PREDICTION_ENDPOINT, 
      {
        method: 'POST',
        body: formData,
        headers: {
          'Prediction-Key': PREDICTION_KEY
        }
      }
    );
    const json = await response.json();
    const prediction = getProbability(json);
    if (prediction !== null) {
      props.onCategoryChange(prediction);
    } else {
      props.onInvalidImage("Please upload another image with better quality. Formats can be JPG., JPEG. and PNG.");
    }
    console.log(json);
    }

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
     <label>
        Upload Image:
        <input type="file" onChange={handleFileChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default UploadImage;