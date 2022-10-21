import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { productProps } from './models';
import './style.css'

export default function ProductCard(props: productProps) {
  return (
    <div>
      <Card sx={{ maxWidth: 212 }} key={props.id}>
        <CardActionArea onClick={() => { window.open('_blank')?.focus() }}>
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