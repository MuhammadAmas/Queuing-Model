import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MM1 from './Models/MM1';
import MG1 from './Models/MG1';
import MMC from './Models/MMC';
import MGC from './Models/MGC';
import GG1 from './Models/GG1';
import GGC from './Models/GGC';


export default function ModelsPages() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      typography: 'body1',
    }}>
      <TabContext value={value}>
        <Box sx={{
          // borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#ff0000'
          color: '#fff'
        }}>
          {/* <TabList onChange={handleChange} aria-label="lab API tabs example"
          sx={{backgroundColor: 'red'}}> */}
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: (value === '1' | value === '2' | value === '3' | value === '4' | value === '5' | value === '6') ? '#ff0000' : 'transparent',
                textColor: (value === '1' | value === '2' | value === '3' | value === '4' | value === '5' | value === '6') ? '#ff0000' : 'transparent'
              },
            }}
          >
            <Tab label={<span style={{ color: value === '1' ? '#ff0000' : '#fff' }}>M/M/1</span>} value="1" />
            <Tab label={<span style={{ color: value === '2' ? '#ff0000' : '#fff' }}>M/M/C</span>} value="2" />
            <Tab label={<span style={{ color: value === '3' ? '#ff0000' : '#fff' }}>M/G/1</span>} value="3" />
            <Tab label={<span style={{ color: value === '4' ? '#ff0000' : '#fff' }}>M/G/C</span>} value="4" />
            <Tab label={<span style={{ color: value === '5' ? '#ff0000' : '#fff' }}>G/G/1</span>} value="5" />
            <Tab label={<span style={{ color: value === '6' ? '#ff0000' : '#fff' }}>G/G/C</span>} value="6" />
          </TabList>
        </Box>
        <TabPanel value="1"><MM1 /></TabPanel>
        <TabPanel value="2"><MMC /></TabPanel>
        <TabPanel value="3"><MG1 /></TabPanel>
        <TabPanel value="4"><MGC /></TabPanel>
        <TabPanel value="5"><GG1 /></TabPanel>
        <TabPanel value="6"><GGC /></TabPanel>
        {/* <TabPanel value="4"><MGC/></TabPanel> */}
      </TabContext>
    </Box>
  );
}
