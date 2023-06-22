// import React, { useState } from 'react';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import ModelsPages from './Components/ModelsPages';
// import "./App.css";
// import Hero from './Components/Hero';
// import SimulationPages from './Components/SimulationPages';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// function App() {
//   const [showSimulation, setShowSimulation] = useState(false);
//   const [showModels, setShowModels] = useState(false);

//   const handleSimulationClick = () => {
//     setShowSimulation(true);
//     setShowModels(false);
//   };

//   const handleModelsClick = () => {
//     setShowSimulation(false);
//     setShowModels(true);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <div>
//         <Stack spacing={4} direction="row" sx={{
//           margin: '3rem auto',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//           <Button variant="contained" onClick={handleSimulationClick}
//             sx={{
//               backgroundColor: '#ff0000',
//               color: '#fff',
//               transition: 'all 0.3s ease-in-out',
//               '&:hover': {
//                 backgroundColor: '#fff',
//                 color: '#ff0000',
//               },
//             }}
//           >Simulation</Button>
//           <Button variant="contained" onClick={handleModelsClick}
//             sx={{
//               backgroundColor: '#ff0000',
//               color: '#fff',
//               transition: 'all 0.3s ease-in-out',
//               '&:hover': {
//                 backgroundColor: '#fff',
//                 color: '#ff0000',
//               },
//             }}
//           >Models</Button>
//         </Stack>
//       </div>
//       {showSimulation && <SimulationPages />}
//       {showModels && <ModelsPages />}
//       <Footer />
//     </div>
//   );
// }

// export default App;
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

  const handleSimulationClick = () => {
    setShowSimulation(true);
    setShowModels(false);
  };

  const handleModelsClick = () => {
    setShowSimulation(false);
    setShowModels(true);
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
            <Button variant="contained" onClick={handleSimulationClick}
              sx={{
                backgroundColor: '#ff0000',
                color: '#fff',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#ff0000',
                },
              }}
            >Simulation</Button>
            <Button variant="contained" onClick={handleModelsClick}
              sx={{
                backgroundColor: '#ff0000',
                color: '#fff',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#ff0000',
                },
              }}
            >Models</Button>
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
