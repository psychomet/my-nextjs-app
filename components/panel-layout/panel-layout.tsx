// import Header from "./header";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./panel-layout.module.less";

const { Header, Content, Footer, Sider } = Layout;

export default function PanelLayout({ children }) {
  return (
    <>
      <Layout className={styles.app__layout}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={["4"]}>
            {/* <Link href="/users"> */}
              <Menu.Item key="1" icon={<UserOutlined />}>
                Users
              </Menu.Item>
            {/* </Link> */}

            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content className={styles.app__layoutContent}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      {/*<Header></Header>*/}
    </>
  );
}
