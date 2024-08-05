import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';

const images = [
  { src: photo1, alt: 'Photo 1' },
  { src: photo2, alt: 'Photo 2' },
  { src: photo3, alt: 'Photo 3' },
];

const ImageGallery = () => {
  const [numVisible, setNumVisible] = useState(3);

  const updateNumVisible = () => {
    if (window.innerWidth < 600) {
      setNumVisible(1);
    } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
      setNumVisible(2);
    } else {
      setNumVisible(3);
    }
  };

  useEffect(() => {
    updateNumVisible();
    window.addEventListener('resize', updateNumVisible);
    return () => {
      window.removeEventListener('resize', updateNumVisible);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Typography 
        variant="h2" 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'black', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          textShadow: '1px 1px 4px white, -1px -1px 4px white, 1px -1px 4px white, -1px 1px 4px white',
          zIndex: 10
        }}
      >
        Electrical Engineering Workshops
      </Typography>
      <ImageList sx={{ width: '100%', height: '100vh', margin: 0 }} cols={numVisible} gap={0}>
        {images.slice(0, numVisible).map((image, index) => (
          <ImageListItem key={index} sx={{ height: '100vh' }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ImageGallery;
