import React from 'react';
import { useState, useEffect } from 'react';


const predictionKey = "APIKEY";
const predictionEndpoint = "Prediction endpoint";

function UploadImage() {

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
      predictionEndpoint, 
      {
        method: 'POST',
        body: formData,
        headers: {
          'Prediction-Key': predictionKey
        }
      }
    );
    const json = await response.json();
    console.log(json);
  }
      // .then(response => {
      //   console.log("ok")
        
      // })
      // .catch(error => {
      //   console.log("error")
    
      // });
  // }

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