import React, { useState } from 'react';

import {
  Box,
  Flex,
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Icon,
  useColorMode,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { auth } from '../Firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

export default function Signup({ setLogin }) {
  const emailPattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  const { colorMode } = useColorMode();

  const [alerta, setAlerta] = useState(false);
  const [alertObject, setAlertObject] = useState({
    alertTitle: '',
    alertDescription: '',
  });

  const getAlert = (title, description) => {
    setAlerta(true);
    setAlertObject({
      alertTitle: title,
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

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    email: '',
    pass: '',
  });

  const SignUpHandler = () => {
    if (!emailPattern.test(signupDetails.email)) {
      getAlert('Error !', 'Your email is incorrect');
      setLoading(false);
    } else if (signupDetails.pass.length < 6) {
      getAlert('Error !', 'Password must contain 6 characters');
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(
        auth,
        signupDetails.email,
        signupDetails.pass
      )
        .then(userCredential => {
          const user = userCredential.user;
          sendEmailVerification(user).then(() => {
            getAlert(
              'Success !',
              'A Verification link send to your email.Verify the your email otherwise you cant log in!'
            );
            setLogin(true);
          });
        })
        .catch(err => {
          if (err.code === 'auth/invalid-email') {
            getAlert('Error !', 'Your email is incorrect');
          } else if (err.code === 'auth/weak-password') {
            getAlert('Error !', 'Weak Password');
          } else if (err.code === 'auth/email-already-in-use') {
            getAlert('Error !', 'You Already have an account');
          } else {
            getAlert('Error !', err.message);
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
        <Alert status={alertObject.alertTitle==="Success !"?"success":"error"} w="50vw" display={alerta ? '' : 'none'}>
          <Flex flexFlow={"column"} >
            <Flex>
            <AlertIcon />
            <AlertTitle>{alertObject.alertTitle+"!"}</AlertTitle>
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

        <Text fontSize="30">Sign Up</Text>
        <Input
          w="50%"
          type="email"
          placeholder="Email"
          mb={3}
          value={signupDetails.email}
          onChange={e =>
            setSignupDetails({ ...signupDetails, email: e.target.value })
          }
        />
        <InputGroup w="50%">
          <Input
            placeholder="password"
            type={showPass ? 'text' : 'password'}
            value={signupDetails.pass}
            onChange={e =>
              setSignupDetails({ ...signupDetails, pass: e.target.value })
            }
          />
          <InputRightElement>
            <IconButton
              icon={<Icon as={showPass ? BsEyeSlashFill : BsEyeFill} />}
              variant="ghost"
              _hover={{ bg: 'none' }}
              onClick={() =>
                showPass ? setShowPass(false) : setShowPass(true)
              }
            />
          </InputRightElement>
        </InputGroup>

        <Flex w="50%" justifyContent="end" textAlign="center">
          <Button
            mt={3}
            mr={3}
            variant="outline"
            rounded="none"
            onClick={() => {
              setLogin(true);
            }}
          >
            Back to Login page
          </Button>
          <Button
            isLoading={loading}
            mt={3}
            variant="outline"
            rounded="none"
            onClick={() => {
              setLoading(true);
              SignUpHandler();
            }}
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
