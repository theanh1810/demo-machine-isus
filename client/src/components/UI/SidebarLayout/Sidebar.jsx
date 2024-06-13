import { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined ,SettingFilled } from '@ant-design/icons';
import './Sidebar.css';

const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '2',
    icon: <SettingFilled />,
    label: 'Settings',
    children: [
      {
        key: '2-1',
        label: 'Machine',
      },
    ],
  },
];

const Sidebar = ({background}) => {
  const [selectedKeys, setSelectedKeys] = useState(['0']);
  const handleClick = (e) => {
    setSelectedKeys([e.key]);
  };
  return (
    <aside className="sidebar" style={{ background }}>
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      onClick={handleClick}
      style={{
        height: '100%',
        borderRight: 0,
      }}
      items={items}
    />
  </aside>
  );
};

export default Sidebar;