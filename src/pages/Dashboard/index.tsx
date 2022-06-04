import React, { useCallback, useState } from 'react';
import SearchBar from 'components/SearchBar';
import { motion } from 'framer-motion';
import { normalizeText } from 'utils/formatting';
import SelectFilter from 'components/SelectFilter';
import DevLicense from 'typings/DevLicense';
import { useTranslation } from 'react-i18next';
import Table from 'components/Table';
import { Container, Filters, Input, Detail, TableContainer } from './styles';

const Dashboard: React.FC = () => {
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
      <div className="Dashboard" />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div>
          <SearchBar onSearch={setSearchValue} />
        </div>
        <TableContainer>
          <Table />
        </TableContainer>
      </motion.div>
    </Container>
  );
};

export default Dashboard;
