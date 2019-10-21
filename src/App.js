import React from 'react';
import './App.css';
import Galleries from './components/galleries/Galleries'

const spaceId = 'yx8bx9i9yjcr';
const environment= 'master';
const deliveryToken = 'vO2pP2CV19EMDnQH4jsb9ML-vExsLLHaOcBv14qf75Q';

function App() {
  return (
    <Galleries deliveryToken={deliveryToken} spaceId={spaceId} environment={environment} />
  );
}

export default App;
