import React, { useState, useEffect } from 'react'
import { Typography, Stack, styled, Box, Grid, Container } from '@mui/material'
import GlassBox from '../../../components/GlassBox'
import storeApi from '../../../api/store'

const InfoStore = () => {
  const [store, setStore] = useState([])

  // const id = "633e5ddff1be5d928b97c813"

  const handleGetStore = async () => {
    try {
      const data = await storeApi.getOne('633e5ddff1be5d928b97c813')
      setStore(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetStore()
  }, [])

  return (
    <GlassBox sx={{ padding: '0' }}>
      <Box>
        <Box>
          <StyleBackground src={store.coverImg} />
        </Box>
        <GlassBox
          sx={{
            maxHeight: { xs: '90px', sm: '150px' },
            maxWidth: { xs: '90px', sm: '150px' },
            border: '10px solid #fff',
            borderRadius: '50%',
            padding: 0,
            position: 'relative',
            left: '50%',
            top: { xs: -70, sm: -90 },
            backdropFilter: 'blur(0px)',
            transform: 'translateX(-50%)',
          }}
        >
          <StyleAvatar src={store.avt} />
        </GlassBox>
      </Box>
      <Container
        maxWidth='sm'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Stack sx={{ marginTop: '-80px' }}>
          <Grid container direction='row' justifyContent='center' spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h3' sx={{ textAlign: 'center' }}>
                {store.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2'>Địa chỉ: {store.address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2'>Hotline: {store.hotline}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2'>
                Giờ làm việc từ {store.open}h - {store.close}h
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2'>Email: admin@gmail.com</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>
                {store.desc}
                Thẩm mỹ viện Seoul Spa – Thương hiệu làm đẹp uy tín hàng đầu Việt Nam Sau 12 năm
                thành lập, Thẩm mỹ viện SeoulSpa.Vn đã vươn mình trở thành hệ thống làm đẹp hàng đầu
                Việt Nam, sở hữu hơn 50 chi nhánh có mặt ở khắp mọi miền tổ quốc, dẫn đầu về chất
                lượng dịch vụ, đáp ứng nhu cầu làm đẹp phong phú của phái đẹp. Trên hành trình đó,
                Thẩm mỹ viện SeoulSpa.Vn không ngừng nỗ lực để thực hiện sứ mệnh “Thăng hoa nhan sắc
                Việt” & khẳng định chữ “Tín – Tâm – Tầm”.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </GlassBox>
  )
}

const StyleBackground = styled('img')`
  width: 100%;
  max-width: 100%;
  height: 200px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
  @media (max-width: 768px) {
    height: 150px;
  }
`

const StyleAvatar = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  backdrop-filter: blur(0);
`

export default InfoStore
