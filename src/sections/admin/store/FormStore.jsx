import React from 'react'
import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import GlassBox from '../../../components/GlassBox'
import RHFTextField from '../../../components/ReactHookForm/RHFTextField'
import RHFProvider from '../../../components/ReactHookForm/RHFProvider'
import { useForm } from 'react-hook-form'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { modules, formats } from '../../../components/EditorToolbar'
import MainButton from '../../../components/MainButton'

const FormStore = () => {
  const methods = useForm({})
  const { handleSubmit, reset } = methods

  const onSubmit = async (values) => {}

  return (
    <GlassBox sx={{ padding: '0' }}>
      <Box>
        <Box>
          <StyleBackground src='http://www.nicdarkthemes.com/themes/beauty/wp/demo/beauty-salon/wp-content/uploads/sites/2/2017/01/parallax-4.jpg' />
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
          <StyleAvatar src='https://cdn-amz.woka.io/images/I/41u-q6Yy2aS._SR200,200_.jpg' />
        </GlassBox>
      </Box>
      <Container
        maxWidth='sm'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ marginTop: '-80px' }}>
            <Grid container direction='row' justifyContent='center' spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name='name' label='Tên cửa hàng' />
                {/* <Typography variant='h3' sx={{textAlign: 'center'}}>Spa Ánh Dương</Typography> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField name='address' label='Đại chỉ' />
                {/* <Typography variant='subtitle2'>Địa chỉ: 200 Đình Thôn, Mỹ đình Hà Nội</Typography> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container direction='row' justifyContent='center' spacing={3}>
                  <Grid item xs={6}>
                    <RHFTextField name='open' label='Giờ mở cửa' />
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField name='close' label='Giờ đóng cửa' />
                  </Grid>
                </Grid>
                {/* <Typography variant='subtitle2'>Hotline: 0327025224</Typography> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField name='hotline' label='Số điện thoại' />
                {/* <Typography variant='subtitle2'>Giờ làm việc từ 8h - 22h</Typography> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField name='email' label='Email' />
                {/* <Typography variant='subtitle2'>Email: admin@gmail.com</Typography> */}
              </Grid>

              <Grid item xs={12}>
                <ReactQuill
                  style={{
                    height: '200px',
                    maxHeight: '200px',
                  }}
                  theme='snow'
                  placeholder={'Viết mô tả...'}
                  modules={modules}
                  formats={formats}
                  //   defaultValue={description}
                  //   value={description}
                  //   onChange={setDescription}
                />
              </Grid>
              <Grid item xs={12} mt='40px'>
                <Stack>
                  <MainButton
                    type='submit'
                    colorType='primary'
                    sx={{ alignSelf: 'center', px: '30px' }}
                  >
                    Cập Nhật
                  </MainButton>
                </Stack>
              </Grid>
            </Grid>
            {/* <Typography variant='subtitle2'>
                Thẩm mỹ viện Seoul Spa – Thương hiệu làm đẹp uy tín hàng đầu Việt Nam Sau 12 năm
                thành lập, Thẩm mỹ viện SeoulSpa.Vn đã vươn mình trở thành hệ thống làm đẹp hàng đầu
                Việt Nam, sở hữu hơn 50 chi nhánh có mặt ở khắp mọi miền tổ quốc, dẫn đầu về chất
                lượng dịch vụ, đáp ứng nhu cầu làm đẹp phong phú của phái đẹp. Trên hành trình đó,
                Thẩm mỹ viện SeoulSpa.Vn không ngừng nỗ lực để thực hiện sứ mệnh “Thăng hoa nhan sắc
                Việt” & khẳng định chữ “Tín – Tâm – Tầm”.
              </Typography> */}
          </Stack>
        </RHFProvider>
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

export default FormStore
