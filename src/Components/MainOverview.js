import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Gallery from './Gallery/Gallery.js';
import CustomGallery from './CustomGallery/CustomGallery.js';

const MainOverview = () => {
  const [value, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Pokemon Gallery' />
          <Tab label='Custom Pokemon Gallery' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h4>PokeyDecks results</h4>
        <Gallery />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h4>
          Your newly created pokemon will be shown here in order of creation,
          just like a blockchain!
        </h4>
        <Link to={`add-pokemon`} style={{ textDecoration: 'none' }}>
          <Button variant='contained'>Add New Pokemon</Button>
        </Link>
        <CustomGallery />
      </TabPanel>
    </Box>
  );
};

export default MainOverview;
