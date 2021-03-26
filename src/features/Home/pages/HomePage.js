import { Container, Row } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import { Images } from "../../../constants/images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Feature from "../components/Feature";
import ListProduct from "../components/ListProduct";
import './HomePage.scss'
import PictureItem from "../components/PictureItem";
import ALBUM from "../../../constants/album";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import LinkList from "../../../constants/link";
function HomePage() {
    return (
        <div className="home-page">
            <div className="home-page__header">
                <Container>
                    <Row>
                        <Header />
                    </Row>
                </Container>
            </div>
            <div className="home-page__banner">
                <Carousel infiniteLoop={true} showThumbs={false} emulateTouch={true} autoPlay={true} interval={5000}>
                    <img src={Images.BANNER_1} alt="banner"></img>
                    <img src={Images.BANNER_2} alt="banner"></img>
                    <img src={Images.BANNER_3} alt="banner"></img>
                    <img src={Images.BANNER_4} alt="banner"></img>
                    <img src={Images.BANNER_5} alt="banner"></img>
                </Carousel>
            </div>
            <Feature/>
            <ListProduct/>
            
            <h2 className="album-picture__title">Album ảnh</h2>
            <div className="album-picture">
                {ALBUM.map((item)=>{
                    return <PictureItem key={item.id} image={item}/>
                })}
            </div>
            <div className="middle-banner">
                <Link to={LinkList.ALIBABA} target="_blank">
                    <img src={Images.BANNER_ALIBABA} alt="middle-banner"></img>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage;