import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Menu() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://198.199.121.72/api/categories')
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error('فشل في جلب التصنيفات', err));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#EFF5FD',
        borderRadius: 8,
        boxShadow: 10,
        px: 3,
        py:0,
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        direction: 'rtl',
        marginTop:0
      }}
    >
      {/* العنوان + اللوقو */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          mb: 0,
          ml: 10,
        }}
      >
        <img className='mt-4'
          src="/logo.png"
          alt="logo"
          style={{ width: '90px', height: 'auto' }}
        />
        <Box sx={{ borderBottom: '4px solid #130753', width: '200%' }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontFamily: 'Tajawal', color: '#130753', mb: 1 }}
          >
            التصنيفات
          </Typography>
        </Box>
      </Box>

      {/* القائمة */}
      <List sx={{ width: '100%', flexGrow: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/')}
            sx={{
              color: '#130753',
              fontFamily: 'Tajawal',
              borderRadius: 2,
              px: 2,
            }}
          >
            <Typography fontSize="1rem" fontWeight="500">
              الرئيسية
            </Typography>
          </ListItemButton>
        </ListItem>

        {categories.map((cat, index) => (
          <ListItem key={cat.id} disablePadding>
            <ListItemButton
              onClick={() => {
                setActiveIndex(index);
                navigate(`/main?category=${cat.id}`);
              }}
              sx={{
                color: activeIndex === index ? '#E2A03F' : '#130753',
                fontFamily: 'Tajawal',
                borderRadius: 2,
                px: 2,
              }}
            >
              <Typography fontSize="1rem" fontWeight="500">
                {cat.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
