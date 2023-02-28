import { Flex, Image } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase/firebaseClient';
import Directory from './Directory';
import RightContent from './RightContent';
import SearchInput from './SearchInput';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      bg='white'
      height='44px'
      padding='6px 12px'
      justify={{ md: 'space-between' }}
    >
      <Flex
        align='center'
        mr={{ base: '0', md: '2' }}
        width={{ base: '40px', md: 'auto' }}
      >
        <Image src='/images/redditFace.svg' height='30px' alt='reddit face' />
        <Image
          src='/images/redditText.svg'
          height='46px'
          alt='reddit'
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
