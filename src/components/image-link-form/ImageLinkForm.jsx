import FaceRecognition from '../FaceRecognition/FaceRecognition';
import './imageLinkForm.css'
import React, { useState } from 'react'


const ImageLinkForm = () => {

const PAT = '118806b823124080ae70bfd211d80001';
const USER_ID = 'aayush0090';       
const APP_ID = 'my-first-application';

const [inputHandle,setInputHandle]=useState('') 
const [boxState,setBoxState]=useState({box:''})



const inputHandler=(event)=>{
  setInputHandle(event.target.value)
}
const buttonHandler=()=>{

  const displayFaceBox=(boxparam)=>{
    setBoxState({box:boxparam})
  }
  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": inputHandle
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};


  fetch("https://api.clarifai.com/v2/models/face-detection/outputs", requestOptions)
  .then(response => response.json())
  .then(result => displayFaceBox(calculateFaceLocation(result)))
  .catch(error => console.log('error', error));

}

const calculateFaceLocation=(data)=>{
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;  
  const image = document.getElementById('inputImage')
  const width = Number(image.width)
  const height = Number(image.height)
  return {
     leftCol:clarifaiFace.left_col * width,
     topRow:clarifaiFace.top_row *height,
     rightCol:width - (clarifaiFace.right_col * width),
     bottomRow:height - (clarifaiFace.bottom_row*height)
  }
}





  return (
    <div>
        <p className='f3'>
            {'This Magic Brain will detect faces in your pictures, Give it a try!'}
        </p>
        <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type="text"  onChange={inputHandler} />
            <button className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={buttonHandler}>Detect</button>
        </div>
        <FaceRecognition boxprop={boxState} imageUrl={inputHandle}/>
    </div>
  )
  
  }
export default ImageLinkForm