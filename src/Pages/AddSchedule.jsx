import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Skeleton, Icon, Button } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher';
import DailySchedule from '../Components/DailySchedule';
import WeeklySchedule from '../Components/WeeklySchedule';
import SpecialSchedule from '../Components/SpecialSchedule';

import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';
import { BiArrowBack } from 'react-icons/bi';
import { child, get, ref } from 'firebase/database';
import { auth, db } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import useStore from '../store';

export default function AddSchedule() {
  const [dailySch, setDailySch] = useState(false);
  const [weeklySch, setWeeklySch] = useState(false);
  const [specialSch, setSpecialSch] = useState(false);

  const [loading, setLoading] = useState(true);

  const alldata = useStore(state => state.userdata);
  const addalldata = useStore(state => state.adduserdata);

  const AllButtons = () => {
    return (
      <Flex flexWrap="wrap">
        <Button
          rounded="none"
          mx={2}
          leftIcon={<Icon as={dailySch ? IoIosRemoveCircle : IoIosAddCircle} />}
          onClick={() => {
            if (dailySch) {
              setDailySch(false);
              setWeeklySch(false);
              setSpecialSch(false);
            } else {
              setDailySch(true);
              setWeeklySch(false);
              setSpecialSch(false);
            }
          }}
          colorScheme={dailySch ? 'green' : 'blue'}
          variant="solid"
        >
          Daily Schedule
        </Button>
        <Button
          rounded="none"
          mx={2}
          leftIcon={
            <Icon as={weeklySch ? IoIosRemoveCircle : IoIosAddCircle} />
          }
          onClick={() => {
            if (weeklySch) {
              setDailySch(false);
              setWeeklySch(false);
              setSpecialSch(false);
            } else {
              setDailySch(false);
              setWeeklySch(true);
              setSpecialSch(false);
            }
          }}
          colorScheme={weeklySch ? 'green' : 'blue'}
          variant="solid"
        >
          Weekly Schedule
        </Button>
        <Button
          rounded="none"
          mx={2}
          leftIcon={
            <Icon as={specialSch ? IoIosRemoveCircle : IoIosAddCircle} />
          }
          onClick={() => {
            if (specialSch) {
              setDailySch(false);
              setWeeklySch(false);
              setSpecialSch(false);
            } else {
              setDailySch(false);
              setWeeklySch(false);
              setSpecialSch(true);
            }
          }}
          colorScheme={specialSch ? 'green' : 'blue'}
          variant="solid"
        >
          Special Schedule
        </Button>
        <Link to="/">
          <Button
            rounded="none"
            variant="outline"
            leftIcon={<Icon as={BiArrowBack} />}
          >
            DONE
          </Button>
        </Link>
      </Flex>
    );
  };

  const DataGathering = () => {
    if (window.navigator.onLine) {
      if (auth.currentUser) {
        get(child(ref(db), `user/${auth.currentUser.uid}/`)).then(e => {
          addalldata(e.val());
          localStorage.setItem('alldata', JSON.stringify(alldata));
        });
      }
    } else {
      addalldata(JSON.parse(localStorage.getItem('alldata')));
    }
  };

  useEffect(() => {
    if (alldata) {
      setLoading(false);
    }
  }, [alldata]);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      DataGathering();
    });
  }, []);

  const Sk = ({ children }) => ( 
    <Skeleton
      startColor="gray.400"
      endColor="red.100"
      height="35px"
      rounded={'none'}
    >
      {children}
    </Skeleton>
  );

  if (loading) {
    return (
      <Box>
        <Flex justifyContent={"end"} m={5}>
          <Sk>
            <Button>+</Button>
          </Sk>
        </Flex>

        <Flex m={2}>
          <Sk><Button>schedules placed here</Button></Sk>
          <Box w={3}></Box>
          <Sk><Button>schedules placed here</Button></Sk>
          <Box w={3}></Box>
          <Sk><Button>schedules placed here</Button></Sk>
          <Box w={3}></Box>
          <Sk><Button> ( )Done</Button></Sk>
        </Flex>
        <Skeleton
        margin="20px"
        startColor="gray.400"
        endColor="red.100"
        height="70vh"
        rounded={'none'}
        >
        </Skeleton>
      </Box>
    );
  }

  return (
    <Box>
      <Flex justifyContent="end" p={3}>
        <ColorModeSwitcher />
      </Flex>
      <Box>
        <AllButtons />
        {dailySch && <DailySchedule data={alldata.daily} />}
        {weeklySch && <WeeklySchedule data={alldata.weekly} />}
        {specialSch && <SpecialSchedule data={alldata.special} />}
      </Box>
    </Box>
  );
}
