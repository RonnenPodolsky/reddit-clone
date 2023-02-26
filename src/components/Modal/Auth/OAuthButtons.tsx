import { Button, Flex, Image } from '@chakra-ui/react';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction='column' width={'100%'} gap={2}>
      <Button variant='oauth' display={'flex'} gap={2}>
        <Image src='/images/googlelogo.png' height='20px' alt='google log in' />
        Continute with google
      </Button>
      <Button variant='oauth' display={'flex'} gap={2}>
        <Image src='/images/github.png' height='20px' alt='github log in' />
        Continute with Github
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
