import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { productProps } from './models';
import './style.css'

export default function ProductCard(props: productProps) {
  return (
    <div>
      <Card sx={{ maxWidth: 212, mb: 2, boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)' }} key={props.id}>
        <CardActionArea sx={{ height: 356 }} onClick={() => { window.open('_blank')?.focus() }}>
          <CardMedia  
            sx={{ objectFit: "contain" }}
            component="img"
            height="250"
            src={props.imageURL}
            alt={props.name}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${props.price.toLocaleString()} đ`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}