import React from 'react';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import sauramPicture from '../images/sauram.jpg';
import matthewPicture from '../images/matthew.jpeg';
import sohamPicture from '../images/soham.png';

const teamMembers = [
  {
    name: 'Sauram',
    school: 'Henry M. Gunn High School',
    description: 'Sauram is a student at Gunn and is a passionate and experienced teacher.',
    image: sauramPicture, 
  },
  {
    name: 'Matthew',
    school: 'Carnegie Mellon University',
    description: 'Matthew is an innovative electrical and computer engineering student at Carnegie Mellon.',
    image: matthewPicture, 
  },
  {
    name: 'Soham',
    school: 'Stanford University',
    description: 'Soham is an aspiring venture capitalist, with a keen interest in electrical and bio engineering.',
    image: sohamPicture, 
  },
];

const About = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <Typography variant="h4" sx={{ marginBottom: 4 }}>
            Meet Our Team
          </Typography>
          <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            alignItems="center" 
          >
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                      <SchoolIcon sx={{ marginRight: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {member.school}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default About;
