import React, { useState, useEffect } from 'react';
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher';
import NameButton from '../Components/NameButton';

import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Box,
  Flex,
  Divider,
  Text,
  Button,
  Icon,Image,
  Skeleton,
  useColorMode,
} from '@chakra-ui/react';

import SpecialCheckField from '../Components/SpecialCheckField';
import Clock from '../Components/Clock';

import { onAuthStateChanged } from '@firebase/auth';
import { auth, db } from '../Firebase';
import { set, ref, child, get } from '@firebase/database';

import Authentication from './Authentication';
import useStore from '../store';
import CheckField from '../Components/CheckField.jsx';

import preloader from "../resources/preloader.gif";


export default function WorksView() {
  const { colorMode } = useColorMode();

  const [user, setUser] = useState();
  const [dayweeklist, setDayweeklist] = useState([]);

  const [specialSchedule, setSpecialSchedule] = useState([])

  const alldata = useStore(state => state.userdata);
  const addalldata = useStore(state => state.adduserdata);

  const [loading, setLoading] = useState(true);


  const [giffy, setGiffy] = useState(true)
  
  
  useEffect(() => {
    if (alldata) {
      const daily = alldata.daily;
      var weekly =
        alldata.weekly[
          new Date().getDay() + 1 === 7 ? 0 : new Date().getDay() + 1
        ];
      weekly = weekly.filter((el, i) => {
        return typeof el == 'object' && el[0] !== '';
      });
      const alllist = [...daily, ...weekly];
      alllist.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
      });
      setDayweeklist(alllist);
    }
  }, [loading]);

  useEffect(() => {
    if (alldata) {
      setSpecialSchedule(alldata.special);
      setLoading(false);
    }
  }, [alldata]);

  useEffect(() => {
    onAuthStateChanged(auth, u => {
      if (window.navigator.onLine) {
        setUser(auth.currentUser);
        DataGathering();
      } else {
        DataGathering();
      }
    });
  }, []);

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
    const filteredSpecial=alldata.special.filter((el,i)=>{
      return (el[0]!==deletedData[0])&&(el[1]!==deletedData[1]);
    })
    addalldata({ ...alldata, special:filteredSpecial })
    setSpecialSchedule(filteredSpecial);
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

  const specialcheckFieldChecked=(newData)=>{
      const spSchedule=specialSchedule;
      spSchedule.map((el,i)=>{
        if(`${el[0]} ${el[1]} ${el[2]}` === `${newData[0]} ${newData[1]} ${newData[2]}`){
          spSchedule[i]=newData;
        }
        return 0;
      })
      addalldata({ ...alldata, special:spSchedule})
      setSpecialSchedule(spSchedule)
  }

  const Sk = ({ children }) => (
    <Skeleton 
    startColor='gray.400' 
    endColor='red.100'
    height="27px"
    rounded={"none"}
    >{children}</Skeleton>
  );


  if(giffy){
    setTimeout(() => {
      setGiffy(false);
    }, 3000);
    return (
      <Flex alignItems={"center"} justifyContent={"center"} h="100vh" w="100vw" bg="#41C6DA" >
        <Image src={preloader} />
      </Flex>
    )
  }

  if(!localStorage.getItem("toDoEmail")){
    return <Authentication />;
  }
  if (loading) {
    return (
      <Box>
        <Flex justifyContent={'end'} my={1}>
          <Sk>
            <div>input field for your name</div>
          </Sk>
          <Box w={'20px'}></Box>
          <Sk>
            <Button>logout</Button>
          </Sk>
          <Box w={'20px'}></Box>
          <Sk>
            <Button size="sm">CM</Button>
          </Sk>
          <Box w={'20px'}></Box>
        </Flex>
        <Flex justifyContent={'space-around'} my={10}>
          <Flex flexFlow={'column'}>
            <Sk>a time clock will display here </Sk>
            <Box h={'20px'}></Box>
            <Box pl={10}>
              <Sk>a date clock will display here</Sk>
            </Box>
          </Flex>
          <Flex flexFlow={'column'}>
            <Box h={'20px'}></Box>
            <Sk>
              <Text h="30px" w="150px">
                + Add Button
              </Text>
            </Sk>
          </Flex>
        </Flex>
        <Flex justifyContent={"space-around"}>
          <Flex flexFlow={"column"}>
            <Box>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
            </Box>
            <Box h={'20px'}></Box>
            <Box>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
            </Box>
            <Box h={'20px'}></Box>
            <Box>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
            </Box>
            <Box h={'20px'}></Box>
          </Flex>
          <Flex flexFlow={"column"}>
            <Box>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
            </Box>
            <Box h={'20px'}></Box>
            <Box>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
            </Box>
            <Box h={'20px'}></Box>
            <Box>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
              <Sk>
                <div>check field will appear here in flex</div>
              </Sk>
            </Box>
            <Box h={'20px'}></Box>
          </Flex>
        </Flex>
      </Box>
    );
  }

  if (!user) {
    return <Authentication />;
  }
  if (!user.emailVerified) {
    return <Authentication />;
  }
  return (
    <Box bg={colorMode === 'light' ? '#D7D4D4' : ''} h="100vh">
      <Flex justifyContent="end" p={3}>
        {alldata && <NameButton name={alldata.Name} />}
        <Button
          rounded="none"
          variant="outline"
          mx={2}
          onClick={() => {
            localStorage.removeItem('toDoEmail');
            localStorage.removeItem('toDoPass');
            localStorage.removeItem('name');
            localStorage.removeItem('alldata');
            auth.signOut();
            window.location.reload();
          }}
        >
          log out
        </Button>
        <ColorModeSwitcher  />
      </Flex>
      <Flex w="100vw" alignItems="center">
        <Clock />
        <Link to="/addSchedule">
          <Button 
            size="sm"
            rounded="none"
            variant="outline"
            leftIcon={<Icon as={FiPlus} />}
          >
            Add Schedule
          </Button>
        </Link>
      </Flex>
      <Divider my={3} />
      <Flex flexFlow="row">
        <Flex flexFlow="column">
          {dayweeklist.map((el, i) => (
            <CheckField key={i} time={el[0]} title={el[1]} isChecked={el[2]} checkFieldChecked={checkFieldChecked} />
          ))}
        </Flex>
        <Flex flexFlow="column">
          {specialSchedule.map((el, i) => (
            <SpecialCheckField
              key={i}
              time={el[0]}
              date={el[1]}
              title={el[2]}
              deletion={deletion}
              isChecked={el[3]}
              specialcheckFieldChecked={specialcheckFieldChecked}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}


// daily state flex alignment