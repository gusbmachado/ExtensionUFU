import React, { useCallback, useEffect, useState } from 'react';
import 'styled-components';
import { useTranslation } from 'react-i18next';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as Profile } from 'assets/images/profile.svg';
import { useAuth } from '../../providers/Auth/AuthProvider';
import MockApi, { UserProfile } from '../../mockApi/api';
import {
  Ul,
  Navbar,
  Li,
  ProfileContainer,
  Info,
  MenuButton,
  LogoHeaderContainer,
} from './styles';

const NavbarScroller = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const { getCredentials, resetCredentials } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState<UserProfile>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const links: Array<{ name: string; to: string }> = [
    { name: `${t('Dashboard')}`, to: '/dashboard' },
    { name: `${t('Clients')}`, to: '/clients' },
    { name: `${t('Licenses')}`, to: '/licenses' },
    { name: `${t('Devices')}`, to: '/devices' },
  ];

  useEffect(() => {
    const getProfile = async () => {
      const { token } = getCredentials();
      const { success, data, response } = await MockApi.getProfile(token);
      if (!success) {
        // eslint-disable-next-line no-console
        console.log(response);
        return;
      }
      setProfile(data);
    };
    getProfile();
  }, [getCredentials]);

  const renderNavLinks = useCallback(
    () =>
      links.map((link: { name: string; to: string }) => (
        <Li
          key={link.name}
          selected={location.pathname === link.to}
          onClick={() => {
            history.push(link.to);
          }}
        >
          <p>{link.name}</p>
        </Li>
      )),
    [history, links, location.pathname],
  );

  let LogPage;

  if (location.pathname === "/login")
    LogPage = true;
  else
    LogPage = false;

  return (
    <Navbar loginPage={LogPage}>
      <LogoHeaderContainer />
      <Ul>{renderNavLinks()}</Ul>
      <Ul>
        <ProfileContainer onClick={() => setMenuOpen(o => !o)}>
          <Info top="20px" fontSize="34px" color="var(--color-neutral-blank)">
            {profile?.name}
          </Info>
          <Info top="50px" fontSize="18px" color="var(--color-neutral-lighter)">
            {profile?.role !== undefined
              ? t(`userRole_${profile?.role}`)
              : profile?.role}
          </Info>
          <Profile id="user_img" />
        </ProfileContainer>
        <MenuButton
          onClick={() => {
            history.push('/profile');
            setMenuOpen(o => !o);
          }}
          menuOpen={menuOpen}
          padding="5px 15px 10px 156px"
          top="20px"
          boxShadow="0px -1.1px 1.4px 0.5px  var(--color-neutral-dark)"
        >
          <CgProfile id="option_icon" /> {t('Profile')}
        </MenuButton>
        <MenuButton
          onClick={() => {
            resetCredentials();
            setMenuOpen(o => !o);
          }}
          menuOpen={menuOpen}
          padding="0px 15px 5px 150px"
          top="60px"
          boxShadow="0px 1.1px 1.4px 0.5px  var(--color-neutral-dark)"
        >
          <BiLogOut id="option_icon" /> {t('Logout')}
        </MenuButton>
      </Ul>
    </Navbar>
  );
};

export default NavbarScroller;
