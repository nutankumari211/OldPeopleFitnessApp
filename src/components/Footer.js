import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#C264FF">
      <Stack gap="20px" alignItems="center" px="10px" pt="24px">
        <Typography variant="h6">
          We Care For You
        </Typography>
        <Box mb="20px" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} width="240px">
          <a style={{ color: "black" }} href="https://github.com/nutankumari211" target="_blank" rel="noreferrer"><GitHub fontSize="large" /></a>
          <a style={{ color: "blue" }} href="https://www.linkedin.com/in/nutan-kumari-b19a28151/" target="_blank" rel="noreferrer"><LinkedIn fontSize="large" /></a>
          <a style={{ color: "purple" }} href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram fontSize="large" /></a>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
