import { Link } from 'react-router-dom';
import { Images } from '../../constants/images';
import './Header.scss'
function Header() {
    return (
        <header className="header">
            <div className="header__item --logo">
                <img className="header__logo-img" src={Images.HOME_LOGO} alt="Logo"></img>
                <div className="header__logo-translate">
                    <Link to="#" className="lang-select">
                        <img className="header__logo-translate-vi" src={Images.VI_LANGUAGE} alt="Viet nam"></img>
                    </Link>
                    <Link to="#" className="lang-select">
                        <img className="header__logo-translate-en" src={Images.EN_LANGUAGE} alt="English"></img>
                    </Link>
                </div>
            </div>
            <div className="header__item">
                <ul className="header__item-list">
                    <li className="header__item-item">
                        <Link to="#" className="header__item-item-link">
                            <img className="header__item-item-img" src={Images.FB} alt="facebook"></img>
                        </Link>
                    </li>
                    <li className="header__item-item">
                        <Link to="#" className="header__item-item-link">
                            <img className="header__item-item-img" src={Images.TWITER} alt="twiter"></img>
                        </Link>
                    </li>
                    <li className="header__item-item">
                        <Link to="#" className="header__item-item-link">
                            <img className="header__item-item-img" src={Images.INSTAGRAM} alt="instagram"></img>
                        </Link>
                    </li>
                    <li className="header__item-item">
                        <Link to="#" className="header__item-item-link">
                            <img className="header__item-item-img" src={Images.GOOGLE} alt="google"></img>
                        </Link>
                    </li>
                </ul>
                <ul className="header__item-list">
                    <li className="header__nav-item">
                        <span>Trang chủ</span>
                    </li>
                    <li className="header__nav-item">
                        <span>Giới thiệu</span>
                    </li>
                    <li className="header__nav-item">
                        <span>Sản phẩm</span>
                        <i className="header__nav-item-down fas fa-angle-down"></i>

                    </li>
                    <li className="header__nav-item">
                        <span>Liên hệ</span>
                    </li>
                </ul>
            </div>

        </header>
    )
}
export default Header;