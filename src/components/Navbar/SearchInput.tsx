/* eslint-disable react/no-children-prop */
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

type SearchInputProps = {
  //user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align='center'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.400' mb={1} />}
        />
        <Input
          placeholder='Search Reddit'
          fontSize='10pt'
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'white',
            outline: 'none',

            border: '1px solid',
            borderColor: 'blue.500',
          }}
          _focus={{
            bg: 'white',
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          height='34px'
          bg='gray.50'
          //   _focus={{ outline: 'none', bg: 'blue.500', border: '1px solid blue' }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
