"use client"

import React, { useState, useEffect } from 'react';

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Function to update the current time every second
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert hours to 12-hour format
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    // Update the time immediately and every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div>{currentTime}</div>;
};

export default CurrentTime;