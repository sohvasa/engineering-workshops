import React from 'react';
import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';
import ReviewsSlider from '../components/ReviewsSlider';
import WeekCard from '../components/WeekCard';
import RoseSection from '../components/RoseSection';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const weeks = [
  { title: "Week 1", topics: ["Electricity Basics", "Kirchhoff’s Voltage Law", "Circuit Analysis", "Lightbulb Lab"] },
  { title: "Week 2", topics: ["Diodes", "LED Lab", "Capacitors", "Capacitor Lab"] },
  { title: "Week 3", topics: ["Boolean Concepts", "Boolean Operators", "Logic Gates", "Logic Gate Lab"] },
  { title: "Week 4", topics: ["Binary Numbers", "Final Lab: Binary Number Comparison Circuit"] },
];

const Home = () => {
  return (
    <div>
      <Box sx={{ position: 'absolute', width: '100%', zIndex: 10 }}>
        <Navbar />
      </Box>
      <ImageGallery />
      <Box sx={{ textAlign: 'center', padding: 2 }}>
        <ReviewsSlider />
      </Box>
      <RoseSection />
      <Container maxWidth="lg" sx={{ padding: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {weeks.map((week, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <WeekCard week={week} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
