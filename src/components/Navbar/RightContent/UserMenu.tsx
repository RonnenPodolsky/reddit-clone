import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { CgProfile } from 'react-icons/cg';
import { FaRedditSquare } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { MdOutlineLogin } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../config/firebase/firebaseClient';

type UserMenuProps = {
  user?: User | null | undefined;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        borderRadius={4}
        padding='0px 6px'
        marginLeft={1.5}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align={'center'}>
          <Flex align={'center'}>
            {user ? (
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize={24}
                  color='gray.300'
                  mr={1}
                />
                <Flex
                  direction={'column'}
                  display={{ base: 'none', md: 'flex' }}
                  fontSize='8pt'
                  align='flex-start'
                  mr={8}
                >
                  <Text
                    width={{ base: 'unset', md: '93px', lg: 'unset' }}
                    fontWeight={800}
                  >
                    {user?.displayName || user.email?.split('@')[0]}
                  </Text>
                  <Flex>
                    <Icon as={IoSparkles} color='brand.100' mr={1} />
                    <Text color='gray.400'>1 Karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={24} color='gray.400' mr={1} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList p={0}>
        {user ? (
          <>
            {' '}
            <MenuItem
              fontSize={'10pt'}
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
            >
              <Flex align='center' gap={2}>
                <Icon fontSize={20} as={CgProfile} /> Profile
              </Flex>
            </MenuItem>
            <MenuDivider m={0} />
            <MenuItem
              fontSize={'10pt'}
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
              onClick={() => signOut(auth)}
            >
              <Flex align='center' gap={2}>
                <Icon fontSize={20} as={MdOutlineLogin} /> Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <MenuItem
            fontSize={'10pt'}
            fontWeight={700}
            _hover={{ bg: 'blue.500', color: 'white' }}
            onClick={() => setAuthModalState({ open: true, view: 'login' })}
          >
            <Flex align='center' gap={2}>
              <Icon fontSize={20} as={MdOutlineLogin} /> Log In / Sign Up
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
