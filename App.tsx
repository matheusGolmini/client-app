import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#d3d3d3" translucent/>
      <Routes />
    </>
  );
}