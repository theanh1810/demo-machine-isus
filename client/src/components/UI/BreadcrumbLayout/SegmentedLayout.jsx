import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const SegmentedLayout = ({ machine_select_id }) => {
  const location = useLocation();

  return (
    <Menu mode="horizontal" defaultSelectedKeys={[location.pathname]}>
      <Menu.Item key={`/machine-detail/${machine_select_id}`}>
        <Link to={`/machine-detail/${machine_select_id}`}>Thông Tin Máy</Link>
      </Menu.Item>
      <Menu.Item key={`/machine-param/${machine_select_id}`}>
        <Link to={`/machine-param/${machine_select_id}`}>Thông Số Máy</Link>
      </Menu.Item>
      <Menu.Item key={`/plan-maintenance/${machine_select_id}`}>
        <Link to={`/plan-maintenance/${machine_select_id}`}>Kế Hoạch Bảo Trì</Link>
      </Menu.Item>
      <Menu.Item key={`/history-maintenance/${machine_select_id}`}>
        <Link to={`/history-maintenance/${machine_select_id}`}>Lịch Sử Bảo Trì</Link>
      </Menu.Item>
      <Menu.Item key={`/history-repair/${machine_select_id}`}>
        <Link to={`/history-repair/${machine_select_id}`}>Lịch Sử Sửa Chữa</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SegmentedLayout;