import { Button, Flex, Text } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { auth } from '../../../config/firebase/firebaseClient';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import Icons from './Icons';
import UserMenu from './UserMenu';

type RightContentProps = {
  user?: User | null | undefined;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify='center' align='center'>
        {user ? <Icons></Icons> : <AuthButtons />}
        <UserMenu user={user} />
        {/* {user ? (
          <Flex align={'center'} gap={1}>
            <Text fontSize='9pt'>{user.email} </Text>
            <Button
              height='28px'
              width={{ base: '70px', md: '110px' }}
              onClick={() => signOut(auth)}
            >
              sign out
            </Button>
          </Flex>
        ) : (
          <AuthButtons />
        )} */}
      </Flex>
    </>
  );
};
export default RightContent;
