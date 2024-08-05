import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const ReviewCard = ({ review }) => {
  return (
    <Card elevation={3} sx={{ width: 300, height: 125, margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              wordWrap: 'break-word',
            }}
          >
            {review.text}
          </Typography>
          <Rating value={review.rating} readOnly sx={{mb: 1}}/>
          <Typography variant="caption" display="block">
            — {review.author}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
