import logo from '../assets/logo.png';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from '@mui/material';
import { useState } from 'react';

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    'خطب',
    'دروس علمية',
    'بطائق دعوية',
    'الكتب',
    'نوادر مفيدة',
    'تسجيلات قرانية',
    'مسائل فقهية',
    'اعلام',
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#EFF5FD',
        borderRadius: 3,
        boxShadow: 3,
        p: 3,
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        direction: 'rtl',
      }}
    >
      {/* العنوان + اللوقو */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100',
          mb: 2,
          ml:20
        }}
      >        {/* اللوقو على اليمين */}
        <img src={logo} alt="logo" style={{ width: '90px', height: 'auto' }} />

        {/* العنوان */}
        <Box sx={{ borderBottom: '4px solid #130753', width: '200%' }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontFamily: 'Tajawal', color: '#130753', mb: 1 }}
          >
            التصنيفات
          </Typography>
        </Box>gut
      </Box>

      {/* القائمة */}
      <List sx={{ width: '100%', flexGrow: 1 }}>
        {items.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => setActiveIndex(index)}
              sx={{
                color: activeIndex === index ? '#E2A03F' : '#130753',
                fontFamily: 'Tajawal',
                borderRadius: 2,
                px: 2,
              }}
            >
              <Typography fontSize="1rem" fontWeight="500">
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
