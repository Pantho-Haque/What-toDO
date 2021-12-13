import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import { Box, useColorMode } from '@chakra-ui/react';

export default function DateTimeCollector({ setTime,setDate }) {
  //toggleColorMode
  const { colorMode } = useColorMode();
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    if(startDate){
      setTime(startDate.toLocaleTimeString())
      setDate(startDate.toDateString())
    }
  }, [startDate]);

  return (
    <Box color={colorMode === 'dark' ? 'blue.300' : 'black'}>
      <DateTimePicker
        value={startDate}
        onChange={date => {
          setStartDate(date);
        }}
      />
    </Box>
  );
}
