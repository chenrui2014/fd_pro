import React, { useEffect } from 'react';
import { Avatar, Card } from '@alifd/next';
import { store as appStore } from 'ice';

const UserInfo = () => {
  const [user, userDispatchers] = appStore.useModel('user');
  useEffect(() => {
    userDispatchers.fetchUserProfile();
  }, []);
  
  return (
    <Card free>
      <Card.Header
        title="状态管理 - 全局状态"
      />
      <Card.Divider />
      <Card.Content>
        <Avatar size="small" src={user.dataSource[0].avatar} />
        <span style={{ marginLeft: 10 }}>{user.dataSource[0].name}</span>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;