import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeekCard = ({ week }) => {
  return (
    <Card elevation={0} sx={{ border: '1px solid black', minWidth: 275, height: 200, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {week.title}
        </Typography>
        <ul>
          {week.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default WeekCard;