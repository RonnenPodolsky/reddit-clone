import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { FIREBASE_ERRORS } from '../../../config/firebase/errors';
import { auth } from '../../../config/firebase/firebaseClient';

type LoginProps = {};
const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, userError] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name='email'
        placeholder='email'
        type='email'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{ border: '1px solid', borderColor: 'blue.500', bg: 'white' }}
        _focus={{
          outline: 'none',
          border: '1px solid',
          borderColor: 'blue.500',
          bg: 'white',
        }}
        bg='gray.50'
      />
      <Input
        required
        name='password'
        placeholder='password'
        type='password'
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{ border: '1px solid', borderColor: 'blue.500', bg: 'white' }}
        _focus={{
          outline: 'none',
          border: '1px solid',
          borderColor: 'blue.500',
          bg: 'white',
        }}
        bg='gray.50'
        mb={2}
      />
      <Text align='center' color='red' fontSize={'10pt'}>
        {FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>

      <Button
        width='100%'
        height='36px'
        mt={2}
        mb={2}
        type='submit'
        isLoading={loading}
      >
        Log In
      </Button>
      <Flex justifyContent='center' mb={2}>
        <Text fontSize='9pt' mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize='9pt'
          color='blue.500'
          cursor='pointer'
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: 'resetPassword' }))
          }
        >
          Reset
        </Text>
      </Flex>

      <Flex justify='center' fontSize='9pt' gap={1}>
        <Text>New here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: 'signup' }))
          }
        >
          SIGN UP?
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
