import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tablPanel } from '../utils/utils';
import { Link } from 'react-router';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`action-tabpanel-${index}`} aria-labelledby={`action-tab-${index}`}{...other}>{value === index && (<Box sx={{ p: 3, fontFamily: '"Poppins", sans-serif' }}>{children}</Box>)}</Typography>
  );
}

function a11yProps(index: any) { return { id: `action-tab-${index}`, 'aria-controls': `action-tabpanel-${index}`, } }


export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => { setValue(newValue); };

  return (
    <Box className='' >
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="action tabs example" sx={{ '& .MuiTabs-indicator': { backgroundColor: '#4A1B4A' }, '& .MuiTab-root': { color: '#000', fontFamily: '"Poppins", sans-serif', }, '& .Mui-selected': { color: '#4A1B4A', fontFamily: '"Poppins", sans-serif', }, }}>
          <Tab label="USD" {...a11yProps(0)} />
          <Tab label="EUR" {...a11yProps(1)} />
          <Tab label="GBP" {...a11yProps(2)} />
          <Tab label="YEN" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {tablPanel.map((item, i: number) => (
            <div className="bg-black/20 backdrop-blur-xl rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center" key={i}>
              <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">GET {item.amount}</p>
              <h2 className='text-sm font-semibold py-5'>FOR</h2>
              <p className="font-semibold text-[1.4rem]">$ {item.price}</p>
              <Link to='' className=' mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold'>BUY</Link>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {tablPanel.map((item, i: number) => (
            <div className="bg-black/20 backdrop-blur-xl rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center" key={i}>
              <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">GET {item.amount}</p>
              <h2 className='text-sm font-semibold py-5'>FOR</h2>
              <p className="font-semibold text-[1.4rem]">€ {item.price}</p>
              <Link to='' className=' mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold'>BUY</Link>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {tablPanel.map((item, i: number) => (
            <div className="bg-black/20 backdrop-blur-xl rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center" key={i}>
              <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">GET {item.amount}</p>
              <h2 className='text-sm font-semibold py-5'>FOR</h2>
              <p className="font-semibold text-[1.4rem]">£ {item.price}</p>
              <Link to='' className=' mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold'>BUY</Link>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {tablPanel.map((item, i: number) => (
            <div className="bg-black/20 backdrop-blur-xl rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center" key={i}>
              <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">GET {item.amount}</p>
              <h2 className='text-sm font-semibold py-5'>FOR</h2>
              <p className="font-semibold text-[1.4rem]">¥ {item.price}</p>
              <Link to='' className=' mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold'>BUY</Link>
            </div>
          ))}
        </div>
      </TabPanel>
    </Box>
  );
}
