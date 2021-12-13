import React,{useState,useEffect} from 'react';
import {Box,Text} from '@chakra-ui/react';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box fontSize="xl" textAlign="center" w="70vw">
      <Text>{time}</Text>
      <Text fontSize="md" ml={20}>
        {date}
      </Text>
    </Box>
  );
}
