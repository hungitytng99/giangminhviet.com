import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import CATEGORY_LIST from '../../constants/category';
import { Images } from '../../constants/images';
import CategoryItem from './CategoryItem';
import './Header.scss'
ReactModal.setAppElement('#root');
const categoryModal = {
    overlay: {
        zIndex: 998,
        animation: 'appear linear 0.3s',
    },
    content: {
        position: 'absolute',
        top: '0',
        right: '0',
        left: '30%',
        bottom: '0',
        backgroundColor: 'white',
        borderRadius: '0px',
        padding: '0px',
        borderTop: 'none',
        animation: 'move-right linear 0.3s',
        transform: 'translateX(0)',
    }
};
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategory: false,
            openCategory: false,
        }

        this.handleOpenCategoryModal = this.handleOpenCategoryModal.bind(this);
        this.handleCloseCategoryModal = this.handleCloseCategoryModal.bind(this);
        this.setOpenCategory = this.setOpenCategory.bind(this);
    }
    handleOpenCategoryModal() {
        this.setState({
            showCategory: true,
        })
    }
    handleCloseCategoryModal() {
        this.setState({
            showCategory: false,
        })
    }
    setOpenCategory(status) {
        this.setState({
            openCategory: status,
        })
    }

    render() {
        return (
            <header className="header">
                <div className="header__item-logo">
                    <img className="header__logo-img" src={Images.HOME_LOGO} alt="Logo"></img>
                    {/* <div className="header__logo-translate">
                        <Link to="#" className="lang-select">
                            <img className="header__logo-translate-vi" src={Images.VI_LANGUAGE} alt="Viet nam"></img>
                        </Link>
                        <Link to="#" className="lang-select">
                            <img className="header__logo-translate-en" src={Images.EN_LANGUAGE} alt="English"></img>
                        </Link>
                    </div> */}
                </div>
                <div className="header__item">
                    <ul className="header__item-list hidden-s-576">
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
                    <ul className="header__item-list hidden-mobile">
                        <li className="header__nav-item">
                            <span>Trang chủ</span>
                        </li>
                        <li className="header__nav-item --has-dropdown">
                            <span>Sản phẩm</span>
                            <i className="header__nav-item-down fas fa-angle-down"></i>
                            <div className="header__dropdown">
                                <ul className="header__dropdown-list">
                                    {CATEGORY_LIST.map((item) => {
                                        return (
                                            <li key={item.id} className="header__dropdown-item">
                                                <Link className="header__dropdown-link" to="#">{item.title}</Link>
                                                <ul className="dropdown-right__list">
                                                    {
                                                        item.child.map((item) => {
                                                            return (
                                                                <li key={item} className="dropdown-right__item">
                                                                    <Link to="#" className="dropdown-right__link">{item}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li className="header__nav-item">
                            <span>Giới thiệu</span>
                        </li>
                        <li className="header__nav-item">
                            <span>Liên hệ</span>
                        </li>
                    </ul>
                    <div className="header-category hidden-desktop">
                        <i className="header-category__icon fas fa-stream" onClick={this.handleOpenCategoryModal}></i>
                    </div>
                    <ReactModal
                        style={categoryModal}
                        isOpen={this.state.showCategory}
                        onRequestClose={this.handleCloseCategoryModal}
                    >
                        <div className="header-category__menu">
                            <div className="header-category__menu-text">
                                MENU
                            </div>
                            <i className="header-category__icon-close fas fa-times" onClick={this.handleCloseCategoryModal}></i>
                        </div>
                        <ul className="header-category__list">
                            {CATEGORY_LIST.map((item) => {
                                return (
                                    <li key={item.id} className="header-category__item">
                                        <CategoryItem items={item} />
                                    </li>
                                )
                            })}
                        </ul>

                    </ReactModal>

                </div>

            </header>
        )
    }

}
export default Header;