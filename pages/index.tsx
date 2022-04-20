import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.less'
import {Button, Col, Row, Space, Typography} from "antd";
import {homeData} from "../mocks/home-data";

const {Title, Text} = Typography;

const Home: NextPage = () => {
    return (
        <>
            <Space className="w-100" direction="vertical" size={64}>
                <div className="container">
                    <div className={styles.home__intro}>
                        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                            <Col offset={2}>
                                <img src="/images/home-intro.png" className="img-fluid" width={450} alt=""/>
                            </Col>
                            <Col span={11}>
                                <Space className="h-100 justify-content-center" direction="vertical" align="center">
                                    <Title>
                      <span className="primary-color">
                          توبانک،
                      </span> یک نئوبانک همراه شماست!
                                    </Title>
                                    <Text className={styles.home__intro__text}>
                                        روی گوشیت حساب باز کن! از احراز هویت آنلاین و افتتاح سپرده آنی گرفته تا صندوق
                                        سرمایه‌گذاری و ثبت‌نام وام ازدواج.
                                    </Text>

                                    <Row className="mt-5" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                        <Col>
                                            <Button type="primary" size="large">دانلود اپلیکیشن</Button>

                                        </Col>
                                        <Col>
                                            <Button type="text" size="large">چطور کار می‌کند؟</Button>

                                        </Col>
                                    </Row>

                                </Space>

                            </Col>
                        </Row>
                    </div>

                </div>
                <div className={styles.home__edgeImageArea}>
                    <img src="/images/Ellipse%20126.svg" className={styles.home__edgeImage} alt=""/>
                    <div className="container">
                        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} align="middle">
                            <Col xs={20} sm={16} md={12} lg={8} xl={14} offset={2}>
                                <Space direction="vertical" size={64}>
                                    <Title level={2}>
                                        شعبه شخصی
                                        <br/>
                                        <span className="primary-color">
                           توبانک
                      </span>
                                    </Title>
                                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                        {homeData.secondSection.features.map((feature, index) =>
                                            <Col className="mb-3" key={index} span={12}>
                                                <Space direction="vertical" size={12}>
                                                    <span
                                                        className={styles.home__edgeFeatureBoxTitle}>{feature.title}</span>
                                                    <Text
                                                        className={styles.home__edgeFeatureBoxDesc}>{feature.text}</Text>

                                                </Space>
                                            </Col>
                                        )}

                                    </Row>
                                </Space>

                            </Col>
                            <Col>
                                <img src="/images/2.png" className={styles.home__edgeImagePhone + ' img-fluid'} alt=""/>
                                <img src="/images/ToBank%20Logo%20Shape%201.png" className={styles.home__edgeSmallImage}
                                     alt=""/>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="container">
                    <Space direction="vertical" size={56} align="center">
                        <span className={styles.home__sectionThree__title}>
                            خدمات توبانک
                        </span>
                        <Row>
                            {homeData.sectionThree.map((item, index) => <Col className="mb-5" span={6} key={index}>
                                <Space size={16}>
                                    <img src={item.image} className={styles.home__sectionThree__featureIcon} alt=""/>
                                    <span className={styles.home__sectionThree__featureTitle}>
                                        خدمات توبانک
                                    </span>
                                </Space>
                            </Col>)}
                        </Row>
                    </Space>
                </div>
                <div className="container">
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} align="middle" justify="space-between">
                        <Col span={8}>
                            <Space direction="vertical" size={32}>
                                <span className={styles.home__sectionFour__title}>
                                    انتخاب رنگ دلخواه شما
                                </span>
                                <Text className={styles.home__sectionFour__text}>
                                    علاوه بر کارت‌های متنوع بانک گردشگری، رنگ کارت بانکی خودتون رو نیز انتخاب کنید.
                                </Text>
                            </Space>
                        </Col>
                        <Col><img src="/images/Group 10388.png" className="img-fluid" alt=""/></Col>
                    </Row>
                </div>
                <div className="container">
                    <div className={styles.home__sectionFive__card}>

                        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                            <Col>
                                <img src="/images/3.png" className={styles.home__sectionFive__image + ' img-fluid'}
                                     alt=""/>
                                <img src="/images/Ellipse%20127.svg"
                                     className={styles.home__sectionFive__absolute__image_2 + ' img-fluid'} alt=""/>
                            </Col>
                            <Col span={13}>
                                <Space direction="vertical" size={32}>
                                    <span className={styles.home__sectionFive__title}>
                                        باشگاه مشتریان توبانک
                                    </span>
                                    <p className={styles.home__sectionFive__desc}>
                                        شما می‌توانید در باشگاه مشتریان توبانک از خدمات تخفیفی باشگاه بهره‌مند شده یا
                                        امتیازهای خود را به شانس شرکت در قرعه‌کشی بانک گردشگری تبدیل کنید.
                                    </p>
                                    <Row>
                                        <Col className="mb-3" span={12}>
                                            <Space size={16}>
                                                <img src="/images/vuesax_outline_tick-square.svg" className="img-fluid"
                                                     alt=""/>
                                                <span className={styles.home__sectionFive__feature__title}>پیش‌بینی مسابقات فوتبال</span>
                                            </Space>
                                        </Col>
                                        <Col className="mb-3" span={12}>
                                            <Space size={16}>
                                                <img src="/images/vuesax_outline_tick-square.svg" className="img-fluid"
                                                     alt=""/>
                                                <span className={styles.home__sectionFive__feature__title}>دریافت کد تخفیف</span>
                                            </Space>
                                        </Col>
                                        <Col className="mb-3" span={12}>
                                            <Space size={16}>
                                                <img src="/images/vuesax_outline_tick-square.svg" className="img-fluid"
                                                     alt=""/>
                                                <span className={styles.home__sectionFive__feature__title}>مشاهده سابقه امتیازها</span>
                                            </Space>
                                        </Col>
                                        <Col className="mb-3" span={12}>
                                            <Space size={16}>
                                                <img src="/images/vuesax_outline_tick-square.svg" className="img-fluid"
                                                     alt=""/>
                                                <span className={styles.home__sectionFive__feature__title}>شرکت در قرعه‌کشی</span>
                                            </Space>
                                        </Col>
                                    </Row>
                                </Space>
                            </Col>
                        </Row>
                        <img src="/images/Ellipse%20128.svg"
                             className={styles.home__sectionFive__absolute__image_1 + ' img-fluid'} alt=""/>
                        <div className={styles.home__sectionFive__line + ' mb-5'}></div>
                        <Row gutter={32} align="middle">
                            <Col className="mb-3" span={8}>
                                <Space size={16}>
                                    <img src="/images/vuesax_bulk_medal-star.svg" className="img-fluid" alt=""/>
                                    <span className={styles.home__sectionFive__subtitle}>نحوه دریافت امتیاز</span>
                                </Space>
                            </Col>
                            {homeData.sectionFive.map((item, index) =>
                                <Col key={index} className="mb-3" span={8}>
                                    <div className={styles.home__sectionFive__featureBox}>
                                        <Space size={16}>
                                            <img src={item.image} className="img-fluid" alt=""/>
                                            <span
                                                className={styles.home__sectionFive__featureBox__title}>{item.label}</span>
                                        </Space>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div className="container">
                    <Row gutter={32} align="middle" justify="space-between">
                        <Col span={13}>
                            <Space direction="vertical" size={32}>
                                <span className={styles.home__sectionSix__title}>
                                    کد دعوتت با ارزشه!
                                </span>
                                <p className={styles.home__sectionSix__desc}>
                                    فقط کافیه بعد از افتتاح سپرده و صدور کارت بانکی در شعبه شخصی اپلیکیشن توبانک، کد
                                    دعوت خودتو برای دوستات ارسال کنی تا بعد از ورود و صدور کارت توسط دوستتون تا سقف مبلغ
                                    ۵۰۰.۰۰۰ ریال به کارت شما واریز بشه. افتتاح حساب در شعبه شخصی بانک گردشگری کاملا
                                    رایگانه .
                                </p>
                            </Space>
                        </Col>
                        <Col span={8}>
                            <img src="/images/Group%2010366.png" className="img-fluid" alt=""/>
                        </Col>
                    </Row>
                </div>
                <div className="container">
                    <div className={styles.home__sectionSix__card}>
                        <Row gutter={32} align="middle" justify="space-between">
                            <Col>
                                <img src="/images/4.png" className={styles.home__sectionSix__image + ' img-fluid'}
                                     alt=""/>
                            </Col>
                            <Col span={15}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Space direction="vertical" size={32}>
                                            <Space size={16}>
                                                <img src="/images/Frame%2020.svg" className="img-fluid" alt=""/>
                                                <span
                                                    className={styles.home__sectionSix__list__title}>دریافت نسخه IOS</span>
                                            </Space>
                                            <Row gutter={16}>
                                                {homeData.sectionSix.iosLinks.map((item, index) => <Col className="mb-4" key={index} span={12}>
                                                    <a href="">
                                                        <img src={item.image} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                </Col>)}
                                            </Row>
                                        </Space>
                                    </Col>
                                    <Col span={12}>
                                        <Space direction="vertical" size={32}>
                                            <Space size={16}>
                                                <img src="/images/Frame%2019.svg" className="img-fluid" alt=""/>
                                                <span
                                                    className={styles.home__sectionSix__list__title}>دریافت نسخه اندروید</span>
                                            </Space>
                                            <Row gutter={16}>
                                                {homeData.sectionSix.iosLinks.map((item, index) => <Col className="mb-4" key={index} span={12}>
                                                    <a href="">
                                                        <img src={item.image} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                </Col>)}
                                            </Row>
                                        </Space>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Space>

        </>
    )
}

export default Home
