import React, { useEffect, useState } from 'react';

import { Calendar } from '@natscale/react-calendar';
import '../themes/datepicker.css';
import '../themes/timepicker.css';

import { ref, set } from 'firebase/database';
import { auth, db } from '../Firebase';
import useStore from '../store';

import { Box, Flex, Button, Input, useColorMode } from '@chakra-ui/react';

import SpecialCheckField from './SpecialCheckField.jsx';

export default function SpecialSchedule({ data }) {
  const { colorMode } = useColorMode();

  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('');

  const [specialSch, setSpecialSch] = useState(data);

  const alldata = useStore(state => state.userdata);
  const addalldata = useStore(state => state.adduserdata);

  const highlitedDay = () => {
    let day = [];
    specialSch.map((el, i) => {
      day.push(new Date(el[1]));
      return 0;
    });
    return day;
  };


  
  //database connection
  useEffect(() => {
    if (auth.currentUser) {
      set(ref(db, `user/`), {
        [auth.currentUser.uid]: alldata,
      });
      localStorage.setItem('alldata', JSON.stringify(alldata));
    }
  }, [alldata]);

  //delete a checkField
  const deletion = deletedData => {
    const filteredSpecial = alldata.special.filter((el, i) => {
      return el[0] !== deletedData[0] && el[1] !== deletedData[1];
    });
    addalldata({ ...alldata, special: filteredSpecial });
    setSpecialSch(filteredSpecial);
  };

  const specialcheckFieldChecked=(newData)=>{
    const spSchedule=specialSch;
    spSchedule.map((el,i)=>{
      if(`${el[0]} ${el[1]} ${el[2]}` === `${newData[0]} ${newData[1]} ${newData[2]}`){
        spSchedule[i]=newData;
      }
      return 0;
    })
    addalldata({ ...alldata, special:spSchedule})
    setSpecialSch(spSchedule)
}

  

  const handleSubmit = () => {
    if (specialSch === '') {
      setSpecialSch([[time, date.toDateString(), text, false]]);
    } else {
      specialSch.push([time, date.toDateString(), text, false]);
      specialSch.sort(function (a, b) {
        var c = new Date(`${a[1]} ${a[0]}`);
        var d = new Date(`${b[1]} ${b[0]}`);
        return c - d;
      });
    }
    setTime('');
    setDate(new Date());
    setText('');
    addalldata({ ...alldata, special: specialSch });
  };

  return (
    <Box w="100vw">
      <Flex flexFlow="column" alignItems="center" my={2} bg="gray.300">
        {specialSch &&
          [...specialSch].map((el, i) => {
            return (
              el[1] === date.toDateString() && (
                <SpecialCheckField
                  key={i}
                  time={el[0]}
                  date={el[1]}
                  title={el[2]}
                  deletion={deletion}
                  isChecked={el[3]}
                  specialcheckFieldChecked={specialcheckFieldChecked}
                />
              )
            );
          })}
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        minH="500px"
        m={3}
        flexFlow="column"
      >
        <Flex alignItems="center" flexFlow="wrap" justifyContent="center">
          <form>
            <Input
              type="time"
              w="200px"
              value={time}
              onChange={e => {
                setTime(e.target.value);
              }}
              borderColor={colorMode === 'light' ? 'gray.900' : 'green.100'}
            />
          </form>
          <Calendar
            useDarkMode={colorMode === 'dark'}
            startOfWeek={6}
            weekends={[5, 6]}
            value={date}
            size={350}
            highlights={highlitedDay()}
            onChange={e => setDate(e)}
          />
        </Flex>

        <Input
          type="text"
          siz="sm"
          w="70%"
          my={3}
          value={text}
          onChange={e => setText(e.target.value)}
          borderColor={colorMode === 'light' ? 'gray.900' : 'green.100'}
          placeholder="Write here"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
        <Button
          colorScheme="teal"
          rounded="none"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}
