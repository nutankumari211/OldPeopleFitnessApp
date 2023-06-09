import React from 'react';
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '40px', xs: '25px' } }} fontWeight={700} color="green" mb="40px" textAlign="center">
        See <span style={{ color: 'purple', textTransform: 'capitalize' }}>{name}</span> Exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} fontWeight={600} color="green">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="green">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;