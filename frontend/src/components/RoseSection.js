import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const RoseSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffeae8', padding: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        2-Hour Weekly Sessions During the Summer
      </Typography>
      <Typography variant="h6">
        Taught by Stanford & Carnegie Mellon Undergrads
      </Typography>
      <Typography variant="h6">
        3 : 1 Student to Instructor Ratio
      </Typography>
      <Typography variant="h6">
        Hands-on Labs
      </Typography>
      <Typography variant="h6">
        Intriguing Problems
      </Typography>
      <Button variant="contained" sx={{ marginTop: 2 }} component={Link} to="/signup">
        Sign Up Now
      </Button>
    </Box>
  );
};

export default RoseSection;