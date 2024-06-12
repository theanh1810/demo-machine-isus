import { Layout, theme } from 'antd';
import Header from '../components/UI/HeaderLayout/Header.jsx';
import Footer from '../components/UI/Footer/Footer.jsx';
import Sidebar from '../components/UI/SidebarLayout/Sidebar.jsx';
import MachineDetail from '../components/Machine/MachineDetail.jsx';

const { Sider } = Layout;

const LayoutApp = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout className='container-layout'>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Sidebar background={colorBgContainer} />
        </Sider>
        <Layout >
          <MachineDetail background={colorBgContainer} borderRadius={borderRadiusLG} />
        </Layout>

      </Layout>        
      <Footer />
    </Layout>
  );
};

console.log(LayoutApp);

export default LayoutApp;