import React, { useState, useEffect } from 'react';

import {  Flex, Text, Button, Input } from '@chakra-ui/react';
import { db, auth } from '../Firebase';
import {set, ref } from 'firebase/database';
import CheckField from './CheckField';
import useStore from '../store';

export default function DailySchedule({data}) {
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

  const [dailyState,setDailyState] = useState(data);

  
  const alldata = useStore(state => state.userdata);
  const addalldata = useStore(state => state.adduserdata);
  
  
  
  
  
  
  //database connection
  useEffect(() => {
    if(auth.currentUser){
      set(ref(db, `user/`), {
        [auth.currentUser.uid]: alldata,
      });
      localStorage.setItem('alldata', JSON.stringify(alldata));
    }
  }, [alldata])
  
  //delete a checkField
  const deletion=(deletedData) => {
    const filteredDaily=dailyState.filter((el,i)=>{
      return (el[0]!==deletedData[0] && el[1]!==deletedData[1]);
    })
    addalldata({ ...alldata, daily:filteredDaily })
    setDailyState(filteredDaily);
  }

  //checking the checkfield
  const checkFieldChecked=(newData)=>{
    const dailySchedule=alldata.daily;
    dailySchedule.map((el,i)=>{
      if(`${el[0]} ${el[1]}` === `${newData[0]} ${newData[1]}`){
        dailySchedule[i]=newData;
      }
      return 0;
    })
    addalldata({ ...alldata, daily:dailySchedule});
  }

  const handleSubmit = () => {
    if(dailyState===""){
      setDailyState([[time,text,false]])
    }
    else{
      dailyState.push([time, text,false]);
      dailyState.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
      });
    }
    setTime('');
    setText('');
    addalldata({ ...alldata, daily:dailyState });
  };

  return (
    <Flex w="100vw" justifyContent="center" alignItems="center" flexFlow="wrap">
      <Flex
        justifyContent="center"
        alignItems="center"
        minH="500px"
        m={3}
        flexFlow="column"
        w="40vw"
      >
        <Input
          type="time"
          size="sm"
          w="30%"
          borderColor="green.100"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <Input
          type="text"
          siz="sm"
          w="70%"
          my={3}
          value={text}
          onChange={e => setText(e.target.value)}
          borderColor="green.100"
          placeholder="Write here"
          onKeyPress={(e)=>{
            if(e.key==="Enter"){
              handleSubmit()
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
      <Flex flexFlow="column" alignItems="center" w="49vw">
        <Text
          fontWeight="semibold"
          my={2}
          border="1px solid"
          borderColor="green.200"
          px={4}
        >
          Daily Schedule
        </Text>
        {[...dailyState].map(e => (
          <CheckField key={Math.random()} time={e[0]} title={e[1]} delEnable={true} deletion={deletion} isChecked={e[2]} checkFieldChecked={checkFieldChecked} />
        ))}
      </Flex>
    </Flex>
  );
}
