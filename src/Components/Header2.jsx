import React from 'react';
import { Box, Typography } from '@mui/material';

const Header2 = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        height: { xs: '250px', md: '430px' },
        backgroundImage: 'url("/Moqen4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',  
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          px: 2,
          py: 1,
          borderRadius: 2,
          mt:30
        }}
      >
        موقن معك إلى طريق اليقين
      </Typography>
    </Box>
  );
};

export default Header2;
