import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, ConfirmButton } from 'components';
import SearchBar from 'components/SearchBar';
import { motion } from 'framer-motion';
import { normalizeText } from 'utils/formatting';
import Input from './Input';
import {
  BottomContainer,
  ButtonContainer,
  Container,
  Form,
  LoginFormContainer,
  LogoContainer,
} from './styles';

const Clients: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const { t } = useTranslation();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <Container>
      <div className="Clients" />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div />
      </motion.div>
    </Container>
  );
};

export default Clients;
