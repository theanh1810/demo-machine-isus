import React from "react";
import { Layout, theme} from "antd";
import Header from "../components/UI/HeaderLayout/Header.jsx";
import Footer from "../components/UI/Footer/Footer.jsx";
import Sidebar from "../components/UI/SidebarLayout/Sidebar.jsx";
const { Sider } = Layout;

const LayoutApp = ({Pages}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const PagesWithProps = React.cloneElement(Pages, {
    colorBgContainer,
    borderRadiusLG,
  });
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
            {PagesWithProps}
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default LayoutApp;
