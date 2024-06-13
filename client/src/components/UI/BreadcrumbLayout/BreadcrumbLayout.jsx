import { Breadcrumb } from 'antd';
import './Breadcrumb.css';

const BreadcrumbLayout = () => (

    <Breadcrumb
      style={{
        margin: '0 0 10px',
      }}
    >
      <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
      <Breadcrumb.Item>Danh sách thiết bị</Breadcrumb.Item>
      <Breadcrumb.Item></Breadcrumb.Item>
    </Breadcrumb>
);


export default BreadcrumbLayout;