import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Price = () => {
    return (
        <>
            <Typography variant='h5' color='red'>23.000.000đ</Typography>
            <Typography variant='h5'>Chọn màu để xem giá và chi nhánh có hàng</Typography>
            <Stack direction='row' spacing={2} justifyContent='space-between' mt={2}>
                <Box sx={{ background: 'white', borderRadius: '5px', border: '1px solid gray' }} p={1} width='150px'>
                    <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
                        <div>
                            <img
                                src='https://cdn.tgdd.vn/Products/Images/42/262650/samsung-galaxy-a23-4g-6.jpg'
                                width='40px'
                                height='40px'
                                style={{ borderRadius: '5px' }}
                            />
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Đen</p>
                            <p style={{ fontSize: '16px' }}>860.000đ</p>
                        </div>
                    </Stack>
                </Box>

                <Box sx={{ background: 'white', borderRadius: '5px', border: '1px solid gray' }} p={1} width='150px'>
                    <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
                        <div>
                            <img
                                src='https://cdn.tgdd.vn/Products/Images/42/262650/samsung-galaxy-a23-4g-6.jpg'
                                width='40px'
                                height='40px'
                                style={{ borderRadius: '5px' }}
                            />
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Đỏ</p>
                            <p style={{ fontSize: '16px' }}>860.000đ</p>
                        </div>
                    </Stack>
                </Box>

                <Box sx={{ background: 'white', borderRadius: '5px', border: '1px solid gray' }} p={1} width='150px'>
                    <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
                        <div>
                            <img
                                src='https://cdn.tgdd.vn/Products/Images/42/262650/samsung-galaxy-a23-4g-6.jpg'
                                width='40px'
                                height='40px'
                                style={{ borderRadius: '5px' }}
                            />
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Hồng</p>
                            <p style={{ fontSize: '16px' }}>860.000đ</p>
                        </div>
                    </Stack>
                </Box>
            </Stack>

            <Stack direction='row' mt={2} spacing={2}>
                <Button variant='contained' color='error' sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', width: '75%' }}>
                    <strong style={{ fontSize: '24px' }}>Mua ngay</strong>
                    <p>(Giao tận nơi hoặc đến cửa hàng lấy)</p>
                </Button>

                <Button variant='outlined' color='error' sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', width: '25%' }}>
                    <AddShoppingCartIcon style={{ color: "red", fontSize: '24px' }} fontSize='large' />
                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Thêm vào giỏ</p>
                </Button>
            </Stack>

            <Stack mt={2}>
                <Button variant='contained' sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', width: '100%' }}>
                    <strong style={{ fontSize: '24px' }}>TRẢ GÓP 0%</strong>
                    <p>(Xét duyệt qua điện thoại)</p>
                </Button>
            </Stack>
        </>
    )
}

export default Price