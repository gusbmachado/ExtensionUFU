import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, ConfirmButton, StyledSelect } from 'components';
import SearchBar from 'components/SearchBar';
import { motion } from 'framer-motion';
import { normalizeText } from 'utils/formatting';
import License from 'typings/License';
import SelectFilter from 'components/SelectFilter';
import Input from './Input';
import {
  BottomContainer,
  ButtonContainer,
  Container,
  Detail,
  Filters,
  Form,
  Inputs,
  LoginFormContainer,
  LogoContainer,
} from './styles';

const Licenses: React.FC = () => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');

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
      <div className="Licenses" />
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

export default Licenses;
