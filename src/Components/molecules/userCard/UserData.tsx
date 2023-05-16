import React, { useContext } from 'react';
import { IUserCard } from '../../../Types/MainTypes';
import UserInfo from '../../atom/UserInfo';
import ThemeContext from '../../context/ThemeContext';
import MakeThemeClassName from '../../helpers/MakeThemeClassname';

type TBottomPanelData = Pick<IUserCard, 'mood' | 'nick' | 'status' | 'eMail' | 'phone'>;

// Example of Molecules, we connect our Atom for rendering user info

const UserData: React.FC<TBottomPanelData> = ({
  mood, nick, status, eMail, phone,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const infoBlockClassName = MakeThemeClassName('user-data', isDarkTheme);
  const mapValues = [
    { name: 'Current mood', value: mood },
    { name: 'Status', value: status },
    { name: 'Nickname', value: nick },
    { name: 'Email', value: eMail },
    { name: 'Phone', value: phone },
  ];
  const infoComp = mapValues.map((item) => {
    if (item.value) {
      return <UserInfo key={item.name} name={item.name} value={item.value} />;
    } return null;
  });
  return <div className={infoBlockClassName}>{infoComp}</div>;
};

export default UserData;
