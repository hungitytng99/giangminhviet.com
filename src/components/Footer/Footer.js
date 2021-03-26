import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Images } from '../../constants/images'
import './Footer.scss'
function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="footer__contact">
                            <div className="footer__contact-title">Liên hệ</div>
                            <ul className="footer__contact-list">
                                <li key="1" className="footer__contact-item">
                                    <i className="footer__contact-item-icon fa fa-home"></i>
                                    <div className="footer__contact-text">
                                        <div className="footer__contact-text-name">
                                            Factory1: Ninh Sở - Thường Tín - Hà Nội
                                         </div>
                                        <div className="footer__contact-text-name">
                                            Factory2: Phú Nghĩa - Chương Mỹ - Hà Nội
                                         </div>
                                    </div>
                                </li>
                                <li key="2" className="footer__contact-item">
                                    <i className="footer__contact-item-icon fa fa-mobile"></i>
                                    <div className="footer__contact-text">
                                        +84 972874229
                                    </div>
                                </li>
                                <li key="3" className="footer__contact-item">
                                    <i className="footer__contact-item-icon fa fa fa-envelope"></i>
                                    <div className="footer__contact-text">
                                        Sales@tienphonghandicrafts.com
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="footer__help">
                            <div className="footer__help-title">Hỗ trợ</div>
                            <ul className="footer__help-list">
                                <li key="4" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <Link to="#">Trang chủ</Link>
                                </li>
                                <li key="5" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <Link to="#">Giới thiệu</Link>
                                </li>
                                <li key="6" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <Link to="#">Sản phẩm</Link>
                                </li>
                                <li key="7" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <Link to="#">Tin tức</Link>
                                </li>
                                <li key="8" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <Link to="#">Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={4} className="hidden-mobile">
                        <div className="footer__connect">
                            <div className="footer__connect-title">Kết nối với chúng tôi</div>
                            <ul className="footer__connect-list">
                                <li key="9" className="footer__connect-item">
                                    <Link to="#" >
                                        <img src={Images.FB} alt="facebook"></img>
                                    </Link>
                                </li>
                                <li key="10" className="footer__connect-item">
                                    <Link to="#" >
                                        <img src={Images.TWITER} alt="facebook"></img>
                                    </Link>
                                </li>
                                <li key="11" className="footer__connect-item">
                                    <Link to="#" >
                                        <img src={Images.INSTAGRAM} alt="facebook"></img>
                                    </Link>
                                </li>
                                <li key="12" className="footer__connect-item">
                                    <Link to="#" >
                                        <img src={Images.GOOGLE} alt="facebook"></img>
                                    </Link>
                                </li>
                            </ul>
                           
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="footer__coppy-right">&#169; Bản quyền thuộc về công ty Giang Minh Việt </p>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;