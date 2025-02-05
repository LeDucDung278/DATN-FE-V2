import {
  CalendarMonth,
  Category,
  Chat,
  Home,
  Paid,
  PeopleAlt,
  RateReview,
  Store,
  WorkspacePremium,
} from '@mui/icons-material'
import {
  Avatar,
  Backdrop,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import GlassBox from '../../components/GlassBox'

const VERTICAL_ITEMS = [
  {
    key: 'main',
    header: 'Chung',
    items: [
      {
        key: 'dashboard',
        title: 'Dashboard',
        icon: <Home />,
        path: '/admin/dashboard',
      },
      {
        key: 'calendar',
        title: 'Lịch đặt',
        icon: <CalendarMonth />,
        path: '/admin/calendar',
      },
      {
        key: 'chat',
        title: 'Tin nhắn',
        icon: <Chat />,
        path: '/admin/chat',
      },
      {
        key: 'store',
        title: 'Thông tin cửa hàng',
        icon: <Store />,
        path: '/admin/store',
      },
    ],
  },
  {
    key: 'management',
    header: 'Quản lý',
    items: [
      {
        key: 'category-management',
        title: 'Danh mục dịch vụ',
        icon: <Category />,
        path: '/admin/category-management',
      },
      {
        key: 'services-management',
        title: 'Dịch vụ',
        icon: <WorkspacePremium />,
        path: '/admin/services-management',
      },
      {
        key: 'users-management',
        title: 'Người dùng',
        icon: <PeopleAlt />,
        path: '/admin/users-management',
      },
      {
        key: 'rated-management',
        title: 'Đánh giá',
        icon: <RateReview />,
        path: '/admin/rated-management',
      },
    ],
  },
  {
    key: 'statistic',
    header: 'Thống kê',
    items: [
      {
        key: 'revenue-statistic',
        title: 'Doanh thu',
        icon: <Paid />,
        path: '/admin/revenue-statistic',
      },
      {
        key: 'users-statistic',
        title: 'Người dùng',
        icon: <WorkspacePremium />,
        path: '/admin/users-statistic',
      },
      {
        key: 'services-statistic',
        title: 'Dịch vụ',
        icon: <PeopleAlt />,
        path: '/admin/services-statistic',
      },
    ],
  },
]

const VerticalSideBar = ({ openMenu, onCloseMenu }) => {
  const theme = useTheme()

  return (
    <>
      {openMenu && (
        <Backdrop
          sx={{
            display: { xs: 'block', sm: 'none' },
            zIndex: 99,
          }}
          open={true}
          onClick={onCloseMenu}
        ></Backdrop>
      )}
      <GradientBackground sx={{ left: { xs: openMenu ? 0 : '-100%', sx: 0 } }}>
        <Stack gap={{ xs: 2, sm: 3 }}>
          <Box sx={{ padding: { xs: '15px', sm: '30px 15px' } }}>
            <GlassBox opacity={0.8} sx={{ padding: '15px' }}>
              <Stack direction='row' gap={2}>
                <Avatar
                  sx={{
                    width: { xs: '35px', sm: '50px' },
                    height: { xs: '35px', sm: '50px' },
                  }}
                />
                <Stack>
                  <Typography variant='h3' sx={{ color: theme.palette.text.secondary }}>
                    Trần Bảo Sơn
                  </Typography>
                  <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                    Admin
                  </Typography>
                </Stack>
              </Stack>
            </GlassBox>
          </Box>
          <Stack gap={2}>
            {VERTICAL_ITEMS.map((item) => (
              <List
                key={item.key}
                subheader={
                  <Typography
                    variant='h5'
                    sx={{
                      color: theme.palette.text.primaryChanel,
                      textTransform: 'uppercase',
                      padding: '0 15px',
                      mb: { xs: 1, sm: 2 },
                    }}
                  >
                    {item.header}
                  </Typography>
                }
              >
                {item.items.map((subItem) => (
                  <CustomListItemButton key={subItem.key} to={subItem.path} component={NavLink}>
                    <ListItemIcon sx={{ minWidth: '35px' }}>{subItem.icon}</ListItemIcon>
                    <Typography variant='body2'>{subItem.title}</Typography>
                  </CustomListItemButton>
                ))}
              </List>
            ))}
          </Stack>
        </Stack>
      </GradientBackground>
    </>
  )
}

const GradientBackground = styled(Box)`
  position: sticky;
  width: 300px;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(50deg, #ecfffd, #dfefff);
  overflow-y: auto;
  z-index: 99;
  transition: 0.5s;
  &:hover {
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    width: 70%;
    left: -100%;
  }
`

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: '5px 0',
  '.MuiListItemIcon-root': {
    color: '#939393',
  },
  '.MuiTypography-body2': {
    color: '#939393',
  },
  '&.Mui-selected': {
    background: 'none',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '5px',
      background: theme.palette.primary.main,
      borderRadius: '0 5px 5px 0',
    },
    '.MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
    '.MuiTypography-body1': {
      color: theme.palette.primary.main,
    },
  },
}))

export default VerticalSideBar
