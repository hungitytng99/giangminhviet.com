import { Col, Container, Row } from 'react-bootstrap';
import FeatureConstanst from '../../../constants/feature';
import { Images } from '../../../constants/images';
import './Feature.scss'
import FeatureFirt from './FeatureFirt';
function Feature() {
    return (
        <div className="feature">
            <div className="feature-title">Danh mục</div>
            <Container fluid>
                <Row noGutters={true}>
                    <Col className="d-flex d-flex justify-content-center" lg={3} md={6} sm={12} >
                        <img src={Images.PRODUCT_MAY} alt="feature" className="feature__img"></img>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <FeatureFirt feature={FeatureConstanst[0]} />
                    </Col>
                    <Col className="d-flex justify-content-center" lg={3} md={6} sm={12} >
                        <img src={Images.PRODUCT_TRE} alt="feature" className="feature__img"></img>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <FeatureFirt feature={FeatureConstanst[1]} />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Row noGutters={true}>
                        <Col className="feature__desktop" lg={3} md={6} sm={12} >
                            <FeatureFirt feature={FeatureConstanst[2]} />
                        </Col>
                        <Col className="d-flex justify-content-center" lg={3} md={6} sm={12} >
                            <img src={Images.PRODUCT_COI} alt="feature" className="feature__img"></img>
                        </Col>
                        <Col className="feature__mobile" lg={3} md={6} sm={12} >
                            <FeatureFirt feature={FeatureConstanst[2]} />
                        </Col>
                        <Col className="feature__desktop"  lg={3} md={6} sm={12} >
                            <FeatureFirt feature={FeatureConstanst[3]} />
                        </Col>
                        <Col className="d-flex justify-content-center" lg={3} md={6} sm={12} >
                            <img src={Images.PRODUCT_LUCBINH} alt="feature" className="feature__img"></img>
                        </Col>
                        <Col className="feature__mobile"  lg={3} md={6} sm={12} >
                            <FeatureFirt feature={FeatureConstanst[3]} />

                        </Col>
                    </Row>
                </Row>

            </Container>
        </div>
    )
}

export default Feature;