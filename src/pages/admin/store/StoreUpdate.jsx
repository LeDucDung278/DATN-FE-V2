import React from 'react'
import { Breadcrumbs, Stack, Link, Typography, Fab } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import FormStore from '../../../sections/admin/store/FormStore'

const StoreUpdate = () => {
  return (
    <Stack gap={2}>
      <Breadcrumbs separator='/'>
        <Link underline='none' color='GrayText' component={RouterLink} to='/admin/dashboard'>
          Dashboard
        </Link>
        <Typography variant='body1' color='GrayText'>
          Cửa hàng
        </Typography>
      </Breadcrumbs>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h2' color='text.secondary'>
          Thông tin cửa hàng
        </Typography>
      </Stack>
      <FormStore />
    </Stack>
  )
}

export default StoreUpdate
