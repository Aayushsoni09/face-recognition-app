import React from 'react'
import './faceRecognition.css'
const FaceRecognition = ({imageUrl,boxprop}) => {
  return (
    
    <div className='center ma'>
        <div className='absolute mt2'>
            {
                {imageUrl} ? 
                <img id='inputImage' src={imageUrl} alt="imgurl" width='500px' height='auto' /> :
                'no image detected'
            }
         <div className='bounding_box' style=
         {{top:boxprop.box.topRow ,
            right:boxprop.box.rightCol ,
            bottom:boxprop.box.bottomRow ,
            left:boxprop.box.leftCol
            }}>
            </div> 
        </div>
        
    </div>
  )
}

export default FaceRecognition