import React from 'react';
import UserPage from './pages/UserPage';
import './Assets/CSS/main.scss';

// Root component containing our pages

const App:React.FC = () => {
  const userPage = <UserPage />;

  return (
    <div className="main">
      {userPage}
    </div>
  );
};

export default App;
