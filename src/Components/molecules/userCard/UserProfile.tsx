import React, { useMemo, useContext } from 'react';
import { IUserCard } from '../../../Types/MainTypes';
import ThemeContext from '../../context/ThemeContext';
import MakeThemeClassName from '../../helpers/MakeThemeClassname';
import Button from '../../atom/common/Button';
import '../../../Assets/CSS/userCard/user-profile.scss';

type TMainPanelData = Pick<IUserCard, 'image' | 'name' | 'bio' | 'isOnline'>;

// Example of Molecules
const UserProfile: React.FC<TMainPanelData> = ({
  image, name = 'Some User', bio, isOnline,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const mainPanelClassName = MakeThemeClassName('user-profile', isDarkTheme);
  const imgClassName = MakeThemeClassName('user-img', isDarkTheme);
  const userClassName = MakeThemeClassName('user-name', isDarkTheme);
  const bioClassname = MakeThemeClassName('user-bio', isDarkTheme);
  const statusClassName = MakeThemeClassName('user-status', isDarkTheme);

  const initials = useMemo(() => {
    const arr = name.split(' ');
    const firstLetter = (arr[0] && arr[0][0]?.toUpperCase()) || 'U';
    const secondLetter = (arr[1] && arr[1][0]?.toUpperCase()) || '';
    return `${firstLetter}${secondLetter}`;
  }, [name]);

  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  const imgComp = image ? <img src={image} className={imgClassName} alt="user profile picture" />
    : <div className={imgClassName}>{initials}</div>;
  const bioComp = bio && <div className={bioClassname}>{bio}</div>;
  const buttonLabel = isOnline ? 'Online' : 'Offline';

  return (
    <div className={mainPanelClassName}>
      {imgComp}
      <div className={userClassName}>{name}</div>
      {bioComp}
      <Button className={statusClassName} label={buttonLabel} disabled={!isOnline} />
    </div>
  );
};

export default UserProfile;
