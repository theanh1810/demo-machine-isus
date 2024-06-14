import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SettingFilled } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const { SubMenu } = Menu;

const Sidebar = ({ background }) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

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
      >
        <Menu.Item key="/">
          <Link to="/">
            <HomeOutlined />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<SettingFilled />} title="Settings">
          <Menu.Item key="/machine">
            <Link to="/machine">Machine</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </aside>
  );
};

export default Sidebar;
