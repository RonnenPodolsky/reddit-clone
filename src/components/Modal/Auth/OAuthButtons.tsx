import { Button, Flex, Image, Text } from '@chakra-ui/react';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '../../../config/firebase/errors';
import { auth } from '../../../config/firebase/firebaseClient';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, googleUserError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, githubUserError] =
    useSignInWithGithub(auth);

  return (
    <Flex direction='column' width={'100%'} gap={2}>
      <Button
        variant='oauth'
        display={'flex'}
        gap={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src='/images/googlelogo.png' height='20px' alt='google log in' />
        Continute with google
      </Button>
      <Button
        variant='oauth'
        display={'flex'}
        gap={2}
        isLoading={gitHubLoading}
        onClick={() => signInWithGithub()}
      >
        <Image src='/images/github.png' height='20px' alt='github log in' />
        Continute with Github
      </Button>
      <Text>{googleUserError?.message || githubUserError?.message}</Text>
    </Flex>
  );
};
export default OAuthButtons;
