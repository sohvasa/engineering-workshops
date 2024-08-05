import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReviewCard from './ReviewCard';

const reviews = [
  { text: "Johnny had a really great time doing the electrical engineering workshop. He loved the hands-on labs and activities!!", author: "Johnny’s Mom", rating: 5 },
  { text: "The instructors were fantastic and the projects were really engaging.", author: "Sarah’s Dad", rating: 4 },
  { text: "A great introduction to electrical engineering for kids!", author: "Emily’s Mom", rating: 5 },
  { text: "My son couldn't stop talking about what he learned each week.", author: "James’ Dad", rating: 4 },
];

const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(3);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - numVisible + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + numVisible) % reviews.length);
  };

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

  const visibleReviews = [];
  for (let i = 0; i < numVisible; i++) {
    visibleReviews.push(reviews[(currentIndex + i) % reviews.length]);
  }

  return (
    <Box sx={{ position: 'relative', width: '100%', textAlign: 'center' }}>
      <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', top: '50%', left: '10px', zIndex: 10 }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        {visibleReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Box>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: '10px', zIndex: 10 }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ReviewsSlider;
