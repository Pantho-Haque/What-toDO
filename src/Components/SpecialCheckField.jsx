import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  Checkbox,
  useColorMode,
} from '@chakra-ui/react';
  
import { RiDeleteBinLine } from 'react-icons/ri';

export default function SpecialCheckField({ time, date, title, deletion , isChecked ,specialcheckFieldChecked}) {
  const [checkedItem, setCheckedItem] = useState(isChecked);
  const { colorMode } = useColorMode();

  const deleteOnClick = () => {
    deletion([time,date,title]);
  };

  return (
    <Box w="50vw">
      <Flex mx="auto" maxW="75%" my={1} alignItems="center">
        <Flex
          w="100%"
          bg={checkedItem ? 'rgba(106, 191, 75, 0.8)' : 'rgba(171,63,63,0.60)'}
          overflow="scroll"
          sx={{
            '&::-webkit-scrollbar': {
              width: '1px',
              height: '1px',
              borderRadius: '48px',
              backgroundColor: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              width: '1px',
              borderRadius: '4px',
              backgroundColor:
                colorMode === 'light'
                  ? 'rgba(0,0,0,0.1)'
                  : 'rgba(256,256,256,0.5)',
            },
          }}
        >
          <Checkbox
            isChecked={checkedItem}
            onChange={e => {
              setCheckedItem(!checkedItem);
              specialcheckFieldChecked([time,date,title,!checkedItem]);
            }}
            w="100%"
            pl="20px"
          >
            <Text pl={3} fontSize="30px" fontWeight="bold">
              {time}
            </Text>
            <Text pl={3} fontSize="10px" fontWeight="bold">
              {date}
            </Text>
            <Text pl={3}>{checkedItem ? <del>{title}</del> : title}</Text>
          </Checkbox>
        </Flex>
        <IconButton
          variant={'ghost'}
          rounded={'none'}
          icon={<Icon as={RiDeleteBinLine} />}
          fontSize={'30px'}
          onClick={() => {
            deleteOnClick();
          }}
        />
      </Flex>
    </Box>
  );
}
