import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Images } from '../../constants/images'
import './Footer.scss'
function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="footer__register">
                            <div className="footer__register-title">Theo dõi bảng tin</div>
                            <div className="footer__register-reg">
                                <input className="footer__register-reg-input" type="email" placeholder="Nhập email"></input>
                                <button className="footer__register-reg-btn">Đăng kí</button>
                            </div>
                            <div className="footer__register-text">Nhận được những thông tin mới nhất từ website</div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="footer__contact">
                            <div className="footer__contact-title">Liên hệ</div>
                            <ul className="footer__contact-list">
                                <li key="1" className="footer_contact-item">
                                    <i className="footer__contact-item-icon fa fa-home"></i>
                                    <div className="footer__contact-text">
                                        <div className="footer__contact-text-name">
                                            Factory1: Ninh Sở - Thường Tín - Hà Nội
                                         </div>
                                        <div className="footer__contact-text-name">
                                            Factory2: Phú Nghĩa - Chương Mỹ - Hà Nộ
                                         </div>
                                    </div>
                                </li>
                                <li key="2" className="footer_contact-item">
                                    <i className="footer__contact-item-icon fa fa-mobile"></i>
                                    <div className="footer__contact-text">
                                        +84 972874229
                                    </div>
                                </li>
                                <li key="3" className="footer_contact-item">
                                    <i className="footer__contact-item-icon fa fa fa-envelope"></i>
                                    <div className="footer__contact-text">
                                        Sales@tienphonghandicrafts.com
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="footer__help">
                            <div className="footer__help-title">Hỗ trợ</div>
                            <ul className="footer__help-list">
                                <li key="4" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <span>Trang chủ</span>
                                </li>
                                <li key="5" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <span>Giới thiệu</span>
                                </li>
                                <li key="6" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <span>Sản phẩm</span>
                                </li>
                                <li key="7" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <span>Tin tức</span>
                                </li>
                                <li key="8" className="footer__help-item">
                                    <i className="fa fa-angle-right"></i>
                                    <span>Liên hệ</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
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
                            <img src={Images.ALIBABA} alt="alibaba"></img>
                            <div className="footer__connect-text">Liên hệ với chúng tôi</div>
                            <Link to="#" className="footer__connect-link">
                                https://vn1533368042swfe.trustpass.alibaba.com/?spm=a2700.icbuShop.88.11.411916cd0N773h
                            </Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
export default Footer;