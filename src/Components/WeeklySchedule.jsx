import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Button,
  useColorMode,
  Input,
} from '@chakra-ui/react';
import { db, auth } from '../Firebase';
import { ref, set } from 'firebase/database';
import useStore from '../store';

export default function WeeklySchedule({ data }) {
  //toggleColorMode
  const { colorMode } = useColorMode();
  const [weekly, ] = useState(data);

  const alldata = useStore(state => state.userdata);
  const addalldata = useStore(state => state.adduserdata);

  const [renderMang, setRenderMang] = useState(false);

  //database connection
  useEffect(() => {
    if (auth.currentUser) {
      set(ref(db, `user/`), {
        [auth.currentUser.uid]: alldata,
      });
      localStorage.setItem('alldata', JSON.stringify(alldata));
    }
  }, [alldata]);


  const EachDaySch = ({ coOrdinate, TIME, TEXT }) => {
    const [time, setTime] = useState(TIME);
    const [text, setText] = useState(TEXT);
    return (
      <Flex
        flexFlow="column"
        justifyContent="center"
        alignItems="center"
        mx={1}
        border="thin solid"
        borderColor="#e6e6e6"
      >
        <Input
          size="sm"
          type="time"
          rounded="none"
          minW="170px"
          textAlign="center"
          borderColor={colorMode === 'light' ? 'gray.400' : 'white'}
          value={time}
          onBlur={() => {
            weekly[coOrdinate[0]][coOrdinate[1]][0] = time;
            addalldata({ ...alldata, weekly:weekly });
          }}
          onChange={e => setTime(e.target.value)}
        />
        <Input
          size="sm"
          rounded="none"
          minW="170px"  
          placeholder="Text"
          textAlign="center"
          borderColor={colorMode === 'light' ? 'gray.400' : 'white'}
          value={text}
          onBlur={() => {
            weekly[coOrdinate[0]][coOrdinate[1]][1] = text;
            addalldata({ ...alldata, weekly:weekly });
          }}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <Button
          size="sm"
          onClick={() => {
            weekly[coOrdinate[0]].splice(coOrdinate[1], 1);
            addalldata({ ...alldata, weekly:weekly });
            setRenderMang(!renderMang);
          }}
        >
          -
        </Button>
      </Flex>
    );
  };

  return (
    <Flex
      w="100vw"
      mt={20}
      flexFlow="column"
      overflow="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '1px',
          height: '3px',
          borderRadius: '48px',
          backgroundColor: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
          width: '1px',
          borderRadius: '4px',
          backgroundColor:
            colorMode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(256,256,256,0.5)',
        },
      }}
    >
      {weekly &&
        [...weekly].map((el, i) => (
          <Flex m={3} key={i} alignItems="center" mx="auto" w="70vw">
            {el.map((e, j) =>
              j === 0 ? (
                <Text  key={j} border="1px solid gray" p={3} mr={2}>
                  {e}
                </Text>
              ) : (
                <EachDaySch key={j}  coOrdinate={[i, j]} TIME={e[0]} TEXT={e[1]} />
              )
            )}
            <Button
              rounded="none"
              m={5}
              size="sm"
              onClick={() => {
                weekly[i].push(['', '',false]);
                addalldata({ ...alldata, weekly:weekly });
                setRenderMang(!renderMang);
              }}
            >
              +
            </Button>
          </Flex>
        ))}
    </Flex>
  );
}
