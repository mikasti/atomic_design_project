import React, { useCallback, useMemo, useState } from 'react';
import { IUserCard } from '../../Types/MainTypes';
import ThemeContext from '../context/ThemeContext';
import HeadPanel from '../molecules/userCard/HeadPanel';
import UserProfile from '../molecules/userCard/UserProfile';
import UserData from '../molecules/userCard/UserData';
import '../../Assets/CSS/userCard/user-card.scss';

export type TUserCard = {
  profile: IUserCard
};

// Example of Organism, connect our Molecules together

const UserCard: React.FC<TUserCard> = ({ profile }) => {
  const {
    name, bio, image, isOnline, mood, nick, status, eMail, phone,
  } = profile;
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  const changeTheme = useCallback((isDark: boolean) => {
    setDarkTheme(isDark);
  }, []);

  const memoTheme = useMemo(() => ({
    isDarkTheme,
    changeTheme,
  }), [isDarkTheme, changeTheme]);

  const headPanel = <HeadPanel />;

  const userProfile = (
    <UserProfile
      name={name}
      bio={bio}
      isOnline={isOnline}
      image={image}
    />
  );

  const userData = (
    <UserData
      mood={mood}
      nick={nick}
      status={status}
      eMail={eMail}
      phone={phone}
    />
  );

  return (
    <ThemeContext.Provider value={memoTheme}>
      <>
        {headPanel}
        {userProfile}
        {userData}
      </>
    </ThemeContext.Provider>
  );
};

export default UserCard;
