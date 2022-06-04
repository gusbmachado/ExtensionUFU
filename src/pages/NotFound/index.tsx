import React from 'react';

import Text from 'components/Text';
import NavbarScroller from 'components/Navbar';
import { useTranslation } from 'react-i18next';
import { FooterLinks } from 'pages/Login/styles';
import { motion } from 'framer-motion';
import {
  Background,
  Body,
  LogoContainer,
  Container,
  NotFoundContainer,
} from './styles';

const NotFound: React.FC = () => {
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
    <Container className="no-user-select">

      <motion.div
        style={{
          display: 'flex',
          flex: '1',
        }}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Body className="page-body">
          <Background />
          <NotFoundContainer>
            <LogoContainer className="no-user-select">
              <Text fontFamily="Telemarines" fontSize="60px">
                viacast licenses
              </Text>
            </LogoContainer>
            <Text fontSize="30px">404</Text>
            <Text fontSize="30px">{t('general:pageNotFound')}</Text>
            <FooterLinks>
              <Text fontSize="20px">
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noreferrer"
                >
                  support
                </a>
              </Text>
            </FooterLinks>
          </NotFoundContainer>
        </Body>
      </motion.div>
    </Container>
  );
};

export default NotFound;
