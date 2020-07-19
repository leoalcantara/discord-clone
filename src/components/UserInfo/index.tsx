import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcons} from './styles';


const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar/>
        <UserData>
          <strong>Leonidio</strong>
          <span>#6965</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcons />
      </Icons>

      
    </Container>
  );
}

export default UserInfo;
