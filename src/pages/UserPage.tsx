import React, { useState, useEffect } from 'react';
import UserCard from '../Components/organisms/UserCard';
import UserPageTemplate from '../Components/templates/UserPageTemplate';
import { userProfileMock } from '../__mocks__/serverResponsesMock';
import { IUserCard } from '../Types/MainTypes';
import LoaderComp from '../Components/molecules/LoaderComp';

// Example of Page, connect Template and Organism together

const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<IUserCard | null>(null);

  useEffect(() => {
    setTimeout(() => setUserData(userProfileMock), 1000);
  }, []);

  if (!userData) {
    return <LoaderComp loadingText="Fetching user data..." />;
  }

  return (
    <UserPageTemplate>
      <UserCard profile={userData} />
    </UserPageTemplate>
  );
};

export default UserPage;
