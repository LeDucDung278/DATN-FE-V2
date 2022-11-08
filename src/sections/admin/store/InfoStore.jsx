import { Avatar, Typography, Stack, styled } from '@mui/material'
import React from 'react'

const InfoStore = () => {
  return (
    <Stack direction='column' spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Typography variant='h2'>Cửa hàng: SPA Ánh Dương</Typography>
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <Typography>Ảnh bìa: </Typography>
        <StyleBanner src='http://www.nicdarkthemes.com/themes/beauty/wp/demo/beauty-salon/wp-content/uploads/sites/2/2017/01/parallax-4.jpg' />
      </Stack>
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <Typography>Logo: </Typography>
        <Avatar
          alt=''
          src='https://cdn-amz.woka.io/images/I/41u-q6Yy2aS._SR200,200_.jpg'
          sx={{ width: '100px', height: '100px' }}
        />
      </Stack>
      <Typography>Địa chỉ: 200 Đình Thôn, Mỹ Đình, Hà Nội</Typography>
      <Typography>Giờ làm việc: Từ 8 giờ - 22 giờ</Typography>
      <Typography>
        Đẹp để thành công hơn.Bất kể lúc nào muốn tỏa sáng, hãy đến với SPA Ánh Dương, chúng tôi sẽ
        không làm bạn thất vọng. Với cuộc sống hiện đại ngày càng bận rộn, làm cho con người bị căng
        thẳng hơn. Vì thế sự nhận thức tốt của mọi người về sức khỏe và làm đẹp được ưu tiên hàng
        đầu. Do đó, nhu cầu về sức khỏe như việc ăn uống, tập thể dục hay đến với Spa để được thư
        giãn, cân bằng sức khỏe ngày càng được chú trọng. Hiện nay, Spa không chỉ dành cho những
        người giàu có. Mà Spa đã trở thành một phần tất yếu của cuộc sống. Nhu cầu về sức khỏe và
        làm đẹp hiện nay ngày càng được nâng cao, chính vì lẽ đó SMYou Spa đã ra đời, với mong muốn
        mang đến cho phái đẹp vẻ đẹp tự nhiên, hoàn hảo, an toàn nhất cho quý khách. ĐIỀU GÌ ĐẶC
        BIỆT Ở SMYOU SPA KHIẾN BẠN YÊU NGAY LẦN ĐẦU TIÊN? Sự thân thiện và thư giãn là cảm nhận đầu
        tiên khi bạn ghé thăm SMYou Spa. Với hình ảnh cây SMYou tươi mát, không gian tinh khiết ngập
        tràn các hương thơm từ tinh dầu thảo dược thiên nhiên và âm nhạc du dương đánh thức mọi giác
        quan, giúp bạn như lạc vào thế giới riêng thật hài hòa, trang nhã. Các vật dụng được trang
        trí trong căn phòng cũng được phối hợp một cách tinh tế làm cho không gian thêm thoáng mát,
        sống động nhưng không kém phần lịch sự.
      </Typography>
    </Stack>
  )
}

const StyleBanner = styled('img')`
  width: 25%;
  height: 100px;
  max-width: 25%;
  max-height: 100px;
  object-fit: cover;
`

export default InfoStore
