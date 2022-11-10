import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import GlassBox from '../../../components/GlassBox'
import RHFTextField from '../../../components/ReactHookForm/RHFTextField'
import RHFProvider from '../../../components/ReactHookForm/RHFProvider'
import { useForm } from 'react-hook-form'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { modules, formats } from '../../../components/EditorToolbar'
import MainButton from '../../../components/MainButton'
import storeApi from '../../../api/store'
import { CameraAlt } from '@mui/icons-material'

const defaultFormValues = {
  name: '',
  address: '',
  open: '',
  close: '',
  hotline: '',
  email: 'beautyparadise1102@gmail.com',
}

const FormStore = () => {
  const [description, setDescription] = useState('')
  const [id, setId] = useState('')

  console.log(id)

  const methods = useForm({
    defaultValues: defaultFormValues,
  })
  const { handleSubmit, reset } = methods

  const onSubmit = async (values) => {}

  const handleGetStore = async () => {
    try {
      const data = await storeApi.getOne('633e5ddff1be5d928b97c813')
      setDescription(data.desc)
      setId(data._id)
      reset({ ...data })
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateStore = async (id, store) => {
    try {
      const data = await serviceApi.update(id, store)
      console.log(data)
      setTimeout(() => {
        navigate('/admin/services-management')
      }, 2000)
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
        <Box sx={{ position: 'relative' }}>
          <StyleBackground src='http://www.nicdarkthemes.com/themes/beauty/wp/demo/beauty-salon/wp-content/uploads/sites/2/2017/01/parallax-4.jpg' />
        </Box>
        <MainButton
          colorType='primary'
          component='label'
          sx={{
            position: 'absolute',
            right: '-70px',
            top: { xs: 70, sm: 150 },
            backdropFilter: 'blur(0px)',
            transform: 'translateX(-50%)',
          }}
        >
          <input hidden accept='image/*' type='file' />
          <CameraAlt />
          <Typography variant='subtitle2'>Chỉnh sửa ảnh bìa</Typography>
        </MainButton>

        <GlassBox
          sx={{
            maxHeight: { xs: '90px', sm: '150px' },
            maxWidth: { xs: '90px', sm: '150px' },
            border: '5px solid #fff',
            borderRadius: '50%',
            padding: 0,
            position: 'absolute',
            left: '50%',
            top: { xs: 70, sm: 90 },
            backdropFilter: 'blur(0px)',
            transform: 'translateX(-50%)',
          }}
        >
          <StyleAvatar src='https://cdn-amz.woka.io/images/I/41u-q6Yy2aS._SR200,200_.jpg' />
          <IconButton
            aria-label='upload picture'
            component='label'
            sx={{
              width: '30px',
              height: '30px',
              position: 'absolute',
              // right: '35%',
              left: '85%',
              top: { xs: 70, sm: 110 },
              backdropFilter: 'blur(0px)',
              transform: 'translateX(-50%)',
            }}
          >
            <CameraAlt />
            <input hidden accept='image/*' type='file' />
          </IconButton>
        </GlassBox>
      </Box>
      <Container
        maxWidth='sm'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ marginTop: '50px' }}>
            <Grid container direction='row' justifyContent='center' spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name='name' label='Tên cửa hàng' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField name='address' label='Địa chỉ' />
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField name='hotline' label='Số điện thoại' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField name='email' label='Email' />
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
                  defaultValue={description}
                  value={description}
                  onChange={setDescription}
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
