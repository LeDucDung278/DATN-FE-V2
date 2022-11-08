import React from 'react'
import { Breadcrumbs, Stack, Link, Typography, Fab } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import InfoStore from '../../../sections/admin/store/InfoStore'
import { Edit } from '@mui/icons-material'

const StoreInfo = () => {
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
        <Fab size='small'>
          <Edit />
        </Fab>
      </Stack>
      <InfoStore />
    </Stack>
  )
}

export default StoreInfo
