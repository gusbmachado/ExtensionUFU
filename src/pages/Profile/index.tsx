import React, { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import Button from 'components/ConfirmButton/Button';
import { Text, Input } from 'components';
import { ReactComponent as DefaultProfilePicture } from 'assets/images/profile.svg';
import { ColorPallete } from 'styles/global';

import data from 'mockdata/users.json';
import {
  Body,
  Container,
  H1,
  PasswordContainer,
  ProfileContent,
  ProfileInfoContainer,
  ProfileInfoLine,
  ProfileLangConfig,
  ProfilePictureContainer,
  ProfilePictureInfo,
  Select,
} from './styles';

const reference = localStorage.getItem('@extensao:remember-me');

// eslint-disable-next-line no-useless-escape
const user = data.find(d => `{\"value\":\"${d.email}\"}` === reference);

const Profile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChange = evt => {
    const opt = evt.target.value;
    setCurrentLanguage(opt);
    i18n.changeLanguage(opt);
  };

  return (
    <Container>

      <Body className="page-body">
        <ProfileContent>
          <ProfilePictureContainer>
            <DefaultProfilePicture
              color={ColorPallete.NEUTRAL_BLANK}
              width="100px"
              height="100px"
              enableBackground=""
            />
            <ProfilePictureInfo>
              <div>
                <Text fontSize="20px">{t('profile:changePicture')}</Text>
                <Text fontSize="16px" color={ColorPallete.NEUTRAL_LIGHTER}>
                  {t('profile:maxPictureSize')}
                </Text>
              </div>
              <Button
                backgroundColor="transparent"
                width="100px"
                height="44px"
                fontSize="16px"
                borderColor={ColorPallete.NEUTRAL_LIGHTER}
                borderWidth="1px"
              >
                <BiUpload size="1.6em" />
                {t('profile:uploadPicture')}
              </Button>
            </ProfilePictureInfo>
          </ProfilePictureContainer>
          <ProfileLangConfig>
            <Text>{t('profile:language')}</Text>
            <Select onChange={handleChange} value={currentLanguage}>
              <option value="pt">{t('profile:pt')}</option>
              <option value="en">{t('profile:en')}</option>
            </Select>
            <H1 marginBottom="19px">{t('profile:flag')}</H1>
          </ProfileLangConfig>
          <ProfileInfoContainer>
            <ProfileInfoLine>
              <Text>{t('profile:email')}</Text>
              <Input placeholder={user?.email} />
            </ProfileInfoLine>
            <ProfileInfoLine>
              <Text>{t('profile:name')}</Text>
              <Input placeholder={user?.name} />
            </ProfileInfoLine>
            <Button fontSize="20px" width="115px" height="44px" shadow>
              {t('general:buttonSave')}
            </Button>
          </ProfileInfoContainer>
          <PasswordContainer>
            <ProfileInfoLine>
              <Text>{t('profile:currentPassword')}</Text>
              <Input placeholder={user?.password} />
            </ProfileInfoLine>
            <ProfileInfoLine>
              <Text>{t('profile:newPassword')}</Text>
              <Input placeholder={t('profile:newPassword')} />
            </ProfileInfoLine>
            <ProfileInfoLine>
              <Text>{t('profile:confirmPassword')}</Text>
              <Input placeholder={t('profile:confirmPassword')} />
            </ProfileInfoLine>
            <Button fontSize="20px" width="115px" height="44px" shadow>
              {t('general:buttonSave')}
            </Button>
          </PasswordContainer>
        </ProfileContent>
      </Body>
    </Container>
  );
};

export default Profile;
