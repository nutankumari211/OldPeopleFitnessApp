import React from 'react';
import { Box, Stack, Typography } from '@mui/material';



const HeroBanner = () => {
  return (
    <Box sx={{ 
        mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } 
        }} 
        position="relative" p="20px"
    >
    <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '30px' } }} mb="23px" mt="30px">
    Age is no barrier. 
    <br/> It's a limitation you put on your mind. Stay active, stay fit.
    </Typography>
    <Typography 
        fontSize="22px" 
        fontFamily="Alegreya" 
        lineHeight="35px">
      
    </Typography>
    <Stack>
      <a href="#exercises" 
      style={{ 
        marginTop: '45px', 
        textDecoration: 'none', 
        width: '400px', 
        textAlign: 'center', 
        background: 'purple', 
        padding: '14px', 
        fontSize: '30px', 
        textTransform: 'none', 
        color: 'white', 
        borderRadius: '4px' 
        }}>Click me to start your day</a>
    </Stack>
    <Typography 
        fontWeight={600} 
        color="purple" 
        sx={{ 
            opacity: '0.1', 
            display: { lg: 'block', xs: 'none' }, 
            fontSize: '200px' 
        }}>
      Exercise
    </Typography>
    
  </Box>
  )
}

export default HeroBanner
