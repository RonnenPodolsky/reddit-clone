import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      <Input
        required
        name='confirmPassword'
        placeholder='confirm password'
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
      <Button width='100%' height='36px' mt={2} mb={2} type='submit'>
        Sign Up
      </Button>
      <Flex justify='center' fontSize='9pt' gap={1}>
        <Text>Already a redditor?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: 'login' }))
          }
        >
          LOG IN?
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
