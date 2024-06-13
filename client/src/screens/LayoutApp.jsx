import { Layout, theme} from "antd";
import Header from "../components/UI/HeaderLayout/Header.jsx";
import Footer from "../components/UI/Footer/Footer.jsx";
import BreadcrumbLayout from "../components/UI/BreadcrumbLayout/BreadcrumbLayout.jsx";
import Sidebar from "../components/UI/SidebarLayout/Sidebar.jsx";
const { Sider, Content } = Layout;

const LayoutApp = ({Pages}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout className="container-layout">
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Sidebar background={colorBgContainer} />
        </Sider>
        <Layout 
          style={{
            padding: 20,
          }}
        >
          <BreadcrumbLayout />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {Pages}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default LayoutApp;
