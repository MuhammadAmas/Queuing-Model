import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ModelsPages from './Components/ModelsPages';
import "./App.css";
import Hero from './Components/Hero';
import SimulationPages from './Components/SimulationPages';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const [showSimulation, setShowSimulation] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [simulationButtonPressed, setSimulationButtonPressed] = useState(false);
  const [modelsButtonPressed, setModelsButtonPressed] = useState(false);

  const handleSimulationClick = () => {
    setShowSimulation(true);
    setShowModels(false);
    setSimulationButtonPressed(true);
    setModelsButtonPressed(false);
  };

  const handleModelsClick = () => {
    setShowSimulation(false);
    setShowModels(true);
    setSimulationButtonPressed(false);
    setModelsButtonPressed(true);
  };

  return (
    <div className="App">
      <div className="content">
        <Header />
        <Hero />
        <div>
          <Stack spacing={4} direction="row" sx={{
            margin: '3rem auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Button
              variant="contained"
              onClick={handleSimulationClick}
              sx={{
                backgroundColor: simulationButtonPressed ? '#fff' : '#ff0000',
                color: simulationButtonPressed ? '#ff0000' : '#fff',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: simulationButtonPressed ? '#ff0000' : '#fff',
                  color: simulationButtonPressed ? '#fff' : '#ff0000',
                },
              }}
            >
              Simulation
            </Button>
            <Button
              variant="contained"
              onClick={handleModelsClick}
              sx={{
                backgroundColor: modelsButtonPressed ? '#fff' : '#ff0000',
                color: modelsButtonPressed ? '#ff0000' : '#fff',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: modelsButtonPressed ? '#ff0000' : '#fff',
                  color: modelsButtonPressed ? '#fff' : '#ff0000',
                },
              }}
            >
              Models
            </Button>
          </Stack>
        </div>
        {showSimulation && <SimulationPages />}
        {showModels && <ModelsPages />}
      </div>
      <Footer />
    </div>
  );
}


export default App;
