import { Breadcrumb, Layout } from 'antd';
import './Machine.css';

const { Content } = Layout;
const MachineDetail = ({background, borderRadius}) => (

  <div className="content-container">
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
      <Breadcrumb.Item>Danh sách thiết bị</Breadcrumb.Item>
      <Breadcrumb.Item></Breadcrumb.Item>
    </Breadcrumb>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background,
        borderRadius,
      }}
    >
      Content
    </Content>
  </div>
);


export default MachineDetail;