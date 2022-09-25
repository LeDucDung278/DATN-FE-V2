import React, { useEffect, useState } from 'react'
import {
  CheckCircle,
  NotInterested,
  FilterAlt,
  Pending,
  AccessTimeFilled,
} from '@mui/icons-material'
import GlassBox from '../../../components/GlassBox'
import {
  Grow,
  Box,
  MenuItem,
  Stack,
  styled,
  Typography,
  IconButton,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
} from '@mui/material'
import { green, pink, yellow, red, blue } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import orderStatusApi from '../../../api/orderStatus'

const StatusTab = () => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleClick = () => {
    setOpen(false)
  }

  const [orderStatus, setOrderStatus] = useState([])

  const getOrderStatus = async () => {
    try {
      const data = await orderStatusApi.getAll()
      setOrderStatus(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOrderStatus()
  }, [])

  const icon = [
    <AccessTimeFilled sx={{ color: yellow[600], fontSize: '20px' }} />,
    <CheckCircle sx={{ color: green[600], fontSize: '20px' }} />,
    <NotInterested sx={{ color: red[600], fontSize: '20px' }} />,
    <Pending sx={{ color: blue[600], fontSize: '20px' }} />,
  ]

  return (
    <BoxStatus>
      <GlassBox sx={{ padding: '5px 0px', borderRadius: '10px' }}>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' alignItems='center'>
            {orderStatus.map((item, index) => (
              <MenuItem key={index} sx={{ padding: '6px 10px' }} component={Link} to={item.type}>
                {icon[index]}
                <Typography variant='body2' sx={{ margin: { xs: '0px 2px', lg: '0px 5px' } }}>
                  2
                </Typography>
                <Typography variant='body1' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Stack>
          <IconButton
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            size='large'
          >
            <FilterAlt sx={{ color: pink[600] }} />
          </IconButton>
          <Popper open={open} anchorEl={anchorRef.current} transition placement='bottom-start'>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='menu-list-grow'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClick}>
                        <Typography variant='body2'>Sắp xếp tên A-Z</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClick}>
                        <Typography variant='body2'>Sắp xếp tên Z-A</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClick}>
                        <Typography variant='body2'>Đánh giá Cao - Thấp</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClick}>
                        <Typography variant='body2'>Đánh giá Thấp - Cao</Typography>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Stack>
      </GlassBox>
    </BoxStatus>
  )
}

const BoxStatus = styled(Box)`
  margin: 24px;
`

export default StatusTab
