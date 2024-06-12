import React from 'react';
import { Menu } from 'antd';
import './Header.css';


const Header = () => (
  <div className="header">
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{
        flex: 1,
        minWidth: 0,
        height: '50px'
      }}
    />
  </div>
);

export default Header;