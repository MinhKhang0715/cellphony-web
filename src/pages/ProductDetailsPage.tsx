import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info';

export default function ProductDetailsPage() {
    return (
        <>
            <Container maxWidth='lg'>
                <Typography variant="h4">Điện thoại Samsung Galaxy A23 4GB</Typography>
                <Divider />
                <Stack direction='row' spacing={5} sx={{ height: '100vh', marginTop: '12px' }}>
                    <div className='content-left' style={{ width: '50%' }}>
                        <img
                            src="https://cdn.tgdd.vn/Products/Images/42/262650/samsung-galaxy-a23-4g-6.jpg"
                            width="100%"
                            style={{ borderRadius: '15px' }}
                        />
                    </div>
                    <div className='content-right' style={{ width: '50%' }}>
                        <Info />
                    </div>
                </Stack>
            </Container>

        </>
    );
}
