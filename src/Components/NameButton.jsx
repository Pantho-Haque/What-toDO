import React, { useState, useEffect } from 'react';
import { Box, Text, Icon, Button, Input, Avatar } from '@chakra-ui/react';
import { auth, db } from '../Firebase';
import { ref,  set } from 'firebase/database';

import { CgProfile } from 'react-icons/cg';
import useStore from '../store';

export default function NameButton({ name }) {
  const [editing, setEditing] = useState(false);

  const alldata = useStore(state => state.userdata);
  const addalldata = useStore(state => state.adduserdata);

  useEffect(() => {
    if(auth.currentUser){
      set(ref(db, `user/`), {
        [auth.currentUser.uid]: alldata,
      });
      localStorage.setItem('alldata', JSON.stringify(alldata));
    }
  }, [alldata])

  return editing ? (
    <Box>
      <Input
        autoFocus={true}
        rounded="none"
        size="md"
        variant="outline"
        mx={1}
        value={name}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            setEditing(!editing);
          }
        }}
        onBlur={()=>{
          setEditing(!editing);
        }}
        onChange={e => {
          addalldata({ ...alldata, Name: e.target.value });
          
        }}
      />
    </Box>
  ) : (
    <Button
      rounded="none"
      variant="outline"
      mx={2}
      onClick={() => {
        setEditing(!editing);
      }}
    >
      <Avatar size="xs" icon={<Icon fontSize="30px" as={CgProfile} />} mr={2} />
      <Text>{name}</Text>
    </Button>
  );
}
