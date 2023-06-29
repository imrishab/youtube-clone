import { useState, useEffect } from "react";
import { Box, Stack, Typography, Avatar } from '@mui/material';
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { profilePhoto } from '../utils/constants';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet &q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar 
        
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}


        />
        <Typography
          className="copyright"
          variant='body2'
          sx={{ mt: 1.5, color: '#ffffff' }}>
          copyright 2023 Google LLC
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}} >
        {/* <Stack sx={{ flexDirection: 'row' }}>
          <Avatar
            alt="Profile Photo"
            src={profilePhoto}
            sx={{ width: 100, height: 100, border: '2px solid #606060' }} />
          <Box sx={{ color: 'white' }}>
            <Typography
              className="copyright"
              variant='body2'
              sx={{ mt: 1.5, color: '#ffffff' }}>
              copyright 2023 Google LLC
            </Typography>
            <Typography
              className="copyright"
              variant='body2'
              sx={{ mt: 1.5, color: '#ffffff' }}>
              copyright 2023 Google LLC
            </Typography>
          </Box>
        </Stack> */}
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: '#ffffff',
            fontSize: '1.5rem',
          }}>
          {selectedCategory} <span style={{ color: '#f31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
