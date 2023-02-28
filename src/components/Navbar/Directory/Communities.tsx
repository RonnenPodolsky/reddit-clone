import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal';
type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
      <MenuItem
        width='100%'
        fontSize={'10pt'}
        _hover={{ bg: 'gray.500' }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Flex align='center'>
          <Icon fontSize={20} as={GrAdd} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;