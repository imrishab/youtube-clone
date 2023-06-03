import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const App = () => (
  <BrowserRouter>
  
    <Box sx={{ backgroundColor: '#ffff19' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);




export default App;

