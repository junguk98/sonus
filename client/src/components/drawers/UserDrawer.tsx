import { Drawer } from 'antd';
import React, { FC } from 'react';

interface UserDrawerProps {
  onClose: () => void;
  visible: boolean;
}

const UserDrawer: FC<UserDrawerProps> = ({ onClose, visible }) => {
  return (
    <>
      <Drawer
        className="user-drawer"
        title={`내 정보`}
        placement="right"
        headerStyle={{ background: '#fffdf7' }}
        bodyStyle={{ background: '#fffdf7' }}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default UserDrawer;
