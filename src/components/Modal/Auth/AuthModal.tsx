import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../config/firebase/firebaseClient';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import ResetPassword from './ResetPassword';

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const handleClose = useCallback(() => {
    setModalState((prev) => ({ ...prev, open: false }));
  }, [setModalState]);

  useEffect(() => {
    if (user) handleClose();
    console.log('user', user);
  }, [user, handleClose]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>
            {modalState.view === 'login'
              ? 'Log In'
              : modalState.view === 'signup'
              ? 'Sign Up'
              : 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex pb={6} direction='column' align='center' justify='center'>
              <Flex
                direction='column'
                align='center'
                justify='center'
                width='70%'
              >
                {modalState.view === 'login' || modalState.view === 'signup' ? (
                  <>
                    <OAuthButtons />
                    <Text mt={2} color='gray.500' fontWeight={700}>
                      OR
                    </Text>
                    <AuthInputs />
                  </>
                ) : (
                  <ResetPassword />
                )}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
