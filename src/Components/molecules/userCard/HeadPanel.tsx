import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import '../../../Assets/CSS/userCard/head-panel.scss';
import makeThemeClassname from '../../helpers/MakeThemeClassname';

// Example of Molecules
const HeadPanel: React.FC = () => {
  const { isDarkTheme, changeTheme } = useContext(ThemeContext);
  const className = makeThemeClassname('head-panel', isDarkTheme);
  const changeDarkTheme = () => {
    changeTheme(!isDarkTheme);
  };

  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-chat">
        <path
          className="primary"
          d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2z"
        />
        <path className="secondary" d="M6 7h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-star" onClick={changeDarkTheme}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path
          className="secondary"
          d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"
        />
      </svg>
    </div>
  );
};

export default HeadPanel;
