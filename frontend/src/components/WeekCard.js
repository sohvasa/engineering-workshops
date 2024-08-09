import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeekCard = ({ week }) => {
  return (
    <Card elevation={0} sx={{ border: '1px solid black', minWidth: 250, height: 180, margin: 1 }}>
      <CardContent>
        <Typography variant="h6" sx={{ wordWrap: 'break-word' }}>
          {week.title}
        </Typography>
        <ul style={{ paddingLeft: '20px', margin: 0, listStylePosition: 'inside' }}>
          {week.topics.map((topic, index) => (
            <li key={index} style={{ wordWrap: 'break-word', lineHeight: '1.5em' }}>
              {topic}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default WeekCard;
