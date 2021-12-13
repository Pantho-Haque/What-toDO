import React, { useState, useEffect } from 'react';

import {
  Box,
  Flex,
  Button,
  Input,
  Text,
  Divider,
  InputGroup,
  InputRightElement,
  Icon,
  useColorMode,
  IconButton,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';

import { signInWithEmailAndPassword,sendPasswordResetEmail} from '@firebase/auth';
import { auth } from '../Firebase';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export default function Login({ setLogin, afterAuth }) {
  const emailPattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  const { colorMode } = useColorMode();

  const [alerta, setAlerta] = useState(false);
  const [alertObject, setAlertObject] = useState({
    alertTitle: '',
    alertDescription: '',
  });

  const getAlert = (title,description) => {
    setAlerta(true);
    setAlertObject({
      alertTitle:title,
      alertDescription: description,
    });
    setTimeout(() => {
      setAlerta(false);
      setAlertObject({
        alertTitle: 'error',
        alertDescription: '',
      });
    }, 3000);
  };

  const [showPass, setShowPass] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    pass: '',
  });

  useEffect(() => {
    const email = localStorage.getItem('toDoEmail');
    const pass = localStorage.getItem('toDoPass');
    if (email && pass) {
      signInWithEmailAndPassword(auth, email, pass);
    }
  }, []);

  const forgetPass=()=>{
    if (!emailPattern.test(loginDetails.email)) {
      getAlert("Error !",'Your email is incorrect');
    }
    else{
      sendPasswordResetEmail(auth,loginDetails.email).then(()=>{
        getAlert("Success !","Password reset email has been sent !");
      }).catch(err=>{
        if (err.code === 'auth/invalid-email') {
          getAlert("Error !",'Your email is incorrect');
        } else if (err.code === 'auth/wrong-password') {
          getAlert("Error !",'Wrong Password');
        } else if (err.code === 'auth/user-disabled') {
          getAlert("Error !",'User Disabled !');
        } else if (err.code === 'auth/user-not-found') {
          getAlert("Error !",'User Not Found !');
        } else {
          getAlert("Error !",err.message);
        }
      })
    }
  }


  const handlelogin = () => {
    if (!emailPattern.test(loginDetails.email)) {
      getAlert("Error !",'Your email is incorrect');
    } else if (loginDetails.pass.length < 6) {
      getAlert("Error !",'Password must contain 6 characters');
    } else {
      signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.pass)
        .then(userCredential => {
          const user = userCredential.user;
          if (!user.emailVerified) {
            getAlert("Error !",'Verify your email first');
          }
          if (user.emailVerified) {
            localStorage.setItem('toDoEmail', loginDetails.email);
            localStorage.setItem('toDoPass', loginDetails.pass);
            afterAuth();
          }
        })
        .catch(err => {
          if (err.code === 'auth/invalid-email') {
            getAlert("Error !",'Your email is incorrect');
          } else if (err.code === 'auth/wrong-password') {
            getAlert("Error !",'Wrong Password');
          } else if (err.code === 'auth/user-disabled') {
            getAlert("Error !",'User Disabled !');
          } else if (err.code === 'auth/user-not-found') {
            getAlert("Error !",'User Not Found !');
          } else {
            getAlert("Error !",err.message);
          }
        });
    }
  };

  return (
    <Box>
      <Flex
        w={['100vw', '100vw', '100vw', '100vw', '50vw']}
        h="80vh"
        justifyContent="center"
        alignItems="center"
        flexFlow="column"
        bg={colorMode === 'light' ? '' : '#181e29'}
        mx="auto"
      >
        <Alert
          status={alertObject.alertTitle === 'Success !' ? 'success' : 'error'}
          w="50vw"
          display={alerta ? '' : 'none'}
        >
          <Flex flexFlow={'column'}>
            <Flex>
              <AlertIcon />
              <AlertTitle>{alertObject.alertTitle + '!'}</AlertTitle>
            </Flex>
            <AlertDescription display="block">
              {alertObject.alertDescription}
            </AlertDescription>
          </Flex>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            rounded="none"
            onClick={() => {
              setAlerta(false);
            }}
          />
        </Alert>
        <Text fontSize="30">Log In</Text>
        <Input
          w="50%"
          placeholder="Email"
          mb={3}
          value={loginDetails.email}
          onChange={e =>
            setLoginDetails({ ...loginDetails, email: e.target.value })
          }
        />
        <InputGroup w="50%">
          <Input
            placeholder="password"
            type={showPass ? 'text' : 'password'}
            value={loginDetails.pass}
            onChange={e =>
              setLoginDetails({ ...loginDetails, pass: e.target.value })
            }
            onKeyPress={e => {
              if (e.key === 'Enter') handlelogin();
            }}
          />
          <InputRightElement>
            <IconButton
              icon={<Icon as={showPass ? BsEyeSlashFill : BsEyeFill} />}
              variant="ghost"
              _hover={{ bg: 'none' }}
              onClick={() => setShowPass(!showPass)}
            />
          </InputRightElement>
        </InputGroup>
        <Flex w="50%" justifyContent="end" textAlign="center">
          <Button
            mt={3}
            variant="outline"
            rounded="none"
            onClick={() => {
              handlelogin();
            }}
          >
            Log in
          </Button>
        </Flex>
        <Divider w="50%" mt={4} />
        <Button variant="outline" color="blue" rounded="none" mb={3}
          onClick={()=>{
            forgetPass();
          }}
        >
          Forget password
        </Button>
        <Button
          variant="solid"
          rounded="none"
          onClick={() => {
            setLogin(false);
          }}
        >
          Sign Up
        </Button>
      </Flex>
    </Box>
  );
}
