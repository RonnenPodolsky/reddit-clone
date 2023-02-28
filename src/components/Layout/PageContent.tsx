import { Flex } from '@chakra-ui/react';

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify='center' p='16px 0px' border='1px solid red'>
      <Flex
        width='95%'
        justify='center'
        maxWidth='860px'
        border='2px solid green'
      >
        {/* LHS */}
        <Flex
          direction='column'
          width={{ base: '100%', md: '65%' }}
          border='1px solid blue'
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}{' '}
        </Flex>

        {/* RHS */}
        <Flex
          direction='column'
          display={{ base: 'none', md: 'flex' }}
          flexGrow={1}
          border='1px solid orange'
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
