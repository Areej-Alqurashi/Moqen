import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cards = [
    {
        title: 'أفضل الكتب في القرن 21',
        booksCount: '15.8 ألف بطاقة',
        votes: '452.3 ألف تصويت',
        covers: ['/card4.jpg', '/card2.jpg', '/card3.jpg', '/card1.jpg', '/card2.jpg'],
    },
    {
        title: 'قائمة قراءة الفلاسفة',
        booksCount: '70 بطاقة',
        votes: '15.3 ألف تصويت',
        covers: ['/card4.jpg', '/card2.jpg', '/card3.jpg', '/card1.jpg', '/card2.jpg'],
    },
    {
        title: 'ليالي الرعب',
        booksCount: '120 بطاقة',
        votes: '18.3 ألف تصويت',
        covers: ['/card4.jpg', '/card2.jpg', '/card3.jpg', '/card1.jpg', '/card2.jpg'],
    },
    {
        title: 'روايات عربية',
        booksCount: '90 بطاقة',
        votes: '9.8 ألف تصويت',
        covers: ['/card4.jpg', '/card2.jpg', '/card3.jpg', '/card1.jpg', '/card2.jpg'],
    },
    {
        title: 'اختيارات علمية',
        booksCount: '200 بطاقة',
        votes: '22.5 ألف تصويت',
        covers: ['/card4.jpg', '/card2.jpg', '/card3.jpg', '/card1.jpg', '/card2.jpg'],
    },
];

const SuggestedCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < cards.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    const visibleCards = cards.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <Box
            dir="rtl"
            sx={{
                px: 5,
                py: 6,
                backgroundColor: '#f3f8fc',

                mt: 0,
                border: '1px solid #ddd',
                borderRadius: 2,
                position: 'relative',
                width: '100%',
            }}
        >
            <Typography variant="h4" fontWeight="bold" mb={4} sx={{ color: '#E2A03F' }}>
                بطائق دعوية
            </Typography>


            {/* الأسهم */}
            <Box sx={{ position: 'absolute', top: 70, left: 40 }}>
                <IconButton onClick={handlePrev} sx={{ color: '#bbb', p: 0.5 }}>
                    <ArrowBackIosIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box sx={{ position: 'absolute', top: 70, left: 60 }}>
                <IconButton onClick={handleNext} sx={{ color: '#bbb', p: 0.5 }}>
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* البطاقات بشكل أفقي */}
            <Box
                display="flex"
                gap={4}
                overflow="auto"
                sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
            >
                {visibleCards.map((card, index) => (
                    <Box key={index} minWidth={260} flexShrink={0}>
                        <Box display="flex" gap={1} mb={2} flexWrap="nowrap" overflow="auto">
                            {card.covers.map((cover, idx) => (
                                <Box
                                    component="img"
                                    key={idx}
                                    src={cover}
                                    alt={`cover-${idx}`}
                                    sx={{
                                        width: 77,
                                        height: 110,
                                        objectFit: 'cover',
                                        borderRadius: 1,
                                        boxShadow: 1,
                                    }}
                                />
                            ))}
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.booksCount} • {card.votes}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SuggestedCards;
