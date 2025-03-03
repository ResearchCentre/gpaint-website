import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: showButton ? '20px' : '-100px',
        transition: 'right 0.3s ease-in-out'
      }}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon />
    </Button>
  );
};

export default ScrollToTopButton;
