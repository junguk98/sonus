import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const username = useParams().username;
  return (
    <>
      <div>profile page</div>
      <div>{username}</div>
    </>
  );
};
export default ProfilePage;
