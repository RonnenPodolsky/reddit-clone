import { Flex, Image } from '@chakra-ui/react';
import RightContent from './RightContent';
import SearchInput from './SearchInput';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center' mr={{ base: '2', md: '0' }}>
        <Image src='/images/redditFace.svg' height='30px' alt='reddit face' />
        <Image
          src='/images/redditText.svg'
          height='46px'
          alt='reddit'
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {/* <Directory/> */}
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
