import React, {
  ReactChild, ReactFragment, ReactPortal,
} from 'react';

interface IProps {
  children: ReactChild | ReactChild[] | ReactFragment | ReactPortal | boolean | null | undefined;
}

// Example of Template, it just added styles for our Organism
const UserPageTemplate: React.FC<IProps> = ({ children }) => (
  <div className="user-card">
    {children}
  </div>
);

export default UserPageTemplate;
