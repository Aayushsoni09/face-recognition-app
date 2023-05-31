import './App.css';
import React from 'react'
import ParticlesBg from 'particles-bg';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#FEFDFD" type="cobweb" bg={true} />
      <Logo/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
