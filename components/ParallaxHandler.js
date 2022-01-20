import React, { useState, useEffect } from 'react';

function ParallaxHandler() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => removeEventListener('scroll', handleScroll)
  }, []);
}

export default ParallaxHandler;
