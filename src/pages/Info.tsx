import React from 'react'
import { Stack } from '@mui/material'
import Price from './Price';
import Sale from './Sale';

const Info = () => {
    return (
        <>
            <Stack spacing={2}>
                <div className='price' style={{ width: '100%' }}>
                    <Price />
                </div>
                <div className='sale' style={{ width: '100%' }}>
                    <Sale />
                </div>
            </Stack>
        </>
    )
}

export default Info