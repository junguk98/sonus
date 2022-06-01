import { Drawer } from 'antd';
import Button from 'components/common/Button';
import React, { FC, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from 'store';

interface UserDrawerProps {
  onClose: () => void;
  visible: boolean;
}

const UserDrawer: FC<UserDrawerProps> = ({ onClose, visible }) => {
  const setUser = useSetRecoilState(userState);
  const onLogout = useCallback(() => {
    setUser(undefined);
  }, []);
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
        extra={<Button onClick={onLogout}>로그아웃</Button>}
      >
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Drawer>
    </>
  );
};
export default UserDrawer;
