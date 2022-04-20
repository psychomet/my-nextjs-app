import {LayoutProps} from "@types/page-with-layout";
import styles from "./main-layout.module.less";
import {Layout, Menu, Space, Row, Col, Button, Dropdown} from "antd";
import {mainMenuData} from "../main-menu/main-menu-data";
import {IMenu} from "@models/menu";
import {useState} from "react";
import {DownOutlined} from "@ant-design/icons";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const menu: IMenu[] = mainMenuData;


const MainLayout: LayoutProps = ({children}) => {
    const [current, setCurrent] = useState<string>('');
    const test = (
        <span>test</span>
    );
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key)
        // this.setState({ current: e.key });
    };

    const subMenu = (menu: IMenu['subMenu']) => {
        return (<><Menu>
            {menu.map(item => <Menu.Item key={item.key}>
                {item}
            </Menu.Item>)}

        </Menu></>)
    }

    return (
        <>
            <Layout className={styles.app__layout}>
                <Sider
                    breakpoint="xs"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    collapsed={true}
                >
                    <div className="logo"/>
                    {/*<Menu mode="inline" defaultSelectedKeys={["4"]}>*/}
                    {/*    /!* <Link href="/users"> *!/*/}
                    {/*    <Menu.Item key="1">Users</Menu.Item>*/}
                    {/*    /!* </Link> *!/*/}

                    {/*    <Menu.Item key="2">nav 2</Menu.Item>*/}
                    {/*    <Menu.Item key="3">nav 3</Menu.Item>*/}
                    {/*    <Menu.Item key="4">nav 4</Menu.Item>*/}
                    {/*</Menu>*/}
                </Sider>
                <Layout>
                    <Header style={{padding: 0}}>

                        <div className={"container"}>
                            {/*<Row gutter={16}>*/}

                            {/*    <Col span={12}>*/}


                            {/*    </Col>*/}
                            {/*</Row>*/}
                            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="space-between" align="middle">
                                <Col>
                                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                        <Col>
                                            <img src="https://tobank.ir/assets/tobank-logo.svg" alt=""
                                                 className={"img-fluid"}
                                                 width={100}/>
                                        </Col>
                                        <Col>
                                            <Space>
                                                <Button type="text">خانه</Button>

                                                <Button type="text">Text Button</Button>
                                                <Button type="text">Text Button</Button>
                                                <Button type="text">Text Button</Button>

                                            </Space>

                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Button type="primary">Primary Button</Button>
                                </Col>
                            </Row>

                        </div>
                    </Header>
                    <Dropdown overlay={test} >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>
                    {/*<Content>{children}</Content>*/}
                    <footer className={styles.app__layout__footer}>
                        <div className="container">
                            <Space direction="vertical" size={36}>
                                <Row gutter={45} align="middle" justify="space-between">
                                    <Col span={12}>
                                        <Row gutter={56} wrap={false} align="middle">
                                            <Col>
                                                <img src="https://tobank.ir/assets/tobank-logo.svg" alt=""
                                                     className={"img-fluid"}
                                                     width={300}/>
                                            </Col>
                                            <Col>
                                                <span className={styles.app__layout__footer__intro_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و </span>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col span={6}>
                                        <Space align="center" size={32}>
                                            <img src="/images/Group%2010387.svg" width={93} alt=""/>
                                            <span className={styles.app__layout__footer__intro_small_text}>
                                                کلیه حقوق این وب‌سایت متعلق به
شرکت ایده پرداز دانش نوین آرشام
است .
                                            </span>
                                        </Space>
                                    </Col>
                                </Row>
                                <hr className={styles.app__layout__footer__divider}/>
                                <Row gutter={160}>
                                    <Col>
                                        <Space direction="vertical" size={32}>
                                            <span className={styles.app__layout__footer__list_title}>ارتباط با ما</span>
                                            <Space direction="vertical" size={16}>
                                                <Space>
                                                    <img src="/images/Light_Icon.svg" alt=""/>
                                                    <span className={styles.app__layout__footer__list_text}>تهران،سعادت آباد، بلوار فرهنگ، نبش کوچه نور، پلاک 6</span>
                                                </Space>
                                                <Space>
                                                    <img src="/images/Light_Icon%20(1).svg" alt=""/>
                                                    <span className={styles.app__layout__footer__list_text}>021-23950 / داخلی 3</span>
                                                </Space>
                                                <Space>
                                                    <img src="/images/Light_Icon%20(2).svg" alt=""/>
                                                    <span
                                                        className={styles.app__layout__footer__list_text}>info@tobank.ir</span>
                                                </Space>
                                            </Space>
                                        </Space>
                                    </Col>
                                    <Col>
                                        <Space direction="vertical" size={32}>
                                            <span className={styles.app__layout__footer__list_title}>دسترسی سریع</span>
                                            <Space direction="vertical" size={16}>
                                                <a href="" className={styles.app__layout__footer__list_text}>سامانه پیچک
                                                    درتوبانک</a>
                                                <a href=""
                                                   className={styles.app__layout__footer__list_text}>پذیرندگان</a>
                                                <a href="" className={styles.app__layout__footer__list_text}>گردش پی</a>
                                            </Space>
                                        </Space>
                                    </Col>
                                    <Col>
                                        <Space direction="vertical" size={32}>
                                            <span className={styles.app__layout__footer__list_title}>دسترسی سریع</span>
                                            <Space direction="vertical" size={16}>
                                                <a href="" className={styles.app__layout__footer__list_text}>قوانین و
                                                    مقررات</a>
                                                <a href="" className={styles.app__layout__footer__list_text}>سوالات
                                                    متداول</a>
                                                <a href="" className={styles.app__layout__footer__list_text}>درباره
                                                    ما</a>
                                            </Space>
                                        </Space>
                                    </Col>
                                    <Col>
                                        <Space direction="vertical" size={32}>
                                            <span className={styles.app__layout__footer__list_title}>با ما در ارتباط باشید</span>
                                            <Space direction="vertical" size={25}>
                                                <Space size={10}>
                                                    <img src="/images/Button.svg" alt=""/>
                                                    <span
                                                        className={styles.app__layout__footer__list_text}>بانک گردشگری</span>
                                                </Space>
                                                <Space size={10}>
                                                    <img src="/images/Button.svg" alt=""/>
                                                    <span
                                                        className={styles.app__layout__footer__list_text}> توبانک</span>
                                                </Space>
                                            </Space>
                                        </Space>
                                    </Col>
                                </Row>
                            </Space>

                        </div>
                    </footer>
                </Layout>
            </Layout>
        </>
    );
};
export default MainLayout;
