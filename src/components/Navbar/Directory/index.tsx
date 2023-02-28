import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { TiHome } from 'react-icons/ti';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import Communities from './Communities';

const UserMenu: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        borderRadius={4}
        padding='0px 6px'
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex
          align={'center'}
          justify='space-between'
          width={{ base: 'auto', lg: '200px' }}
        >
          <Flex align={'center'}>
            <Icon as={TiHome} fontSize={24} mr={{ base: 1, md: 2 }} />
            <Flex fontWeight={600} display={{ base: 'none', lg: 'flex' }}>
              <Text>Home</Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList  mt={0} p={0}>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
