import React, { useState } from 'react';
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import { auth,db } from '../Firebase';
import { set,get,child,ref } from 'firebase/database';


export default function Authentication() {

  const [login, setLogin] = useState(true);

  const afterAuth = () =>{
    if(auth.currentUser){
      if(auth.currentUser.emailVerified){
        get(child(ref(db), `user/${auth.currentUser.uid}`)).then(e => {
          if (!e.exists()) {
            set(ref(db, 'user/' + auth.currentUser.uid), {
              Name:"Set Your Name",
              daily:'',
              weekly:[
                ['SAT'],
                ['SUN'],
                ['MON'],
                ['TUE'],
                ['WED'],
                ['THU'],
                ['FRI'],
              ],
              special: '',
            });
          } else {
            get(child(ref(db), `user/${auth.currentUser.uid}/`)).then(e => {
              localStorage.setItem("alldata",JSON.stringify(e.val()))
            });
          }
        });
      }
    }
  }

  return (
    <Box>
      <Flex justifyContent="end" p={3}>
        <ColorModeSwitcher />
      </Flex>
      <Box>
        {login ? <Login setLogin={setLogin} afterAuth={afterAuth} /> : <Signup setLogin={setLogin} />}
      </Box>
    </Box>
  );
}
