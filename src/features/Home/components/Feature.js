import { Row } from 'react-bootstrap';
import FeatureConstanst from '../../../constants/feature';
import { Images } from '../../../constants/images';
import './Feature.scss'
import FeatureFirt from './FeatureFirt';
function Feature() {
    return (
        <div className="feature">
            <div className="feature-title">Danh mục</div>
            <Row>
                <ul className="feature-row__list">
                    <li className="feature-row__item">
                        <img src={Images.PRODUCT_MAY} alt="feature"></img>
                    </li>
                    <li className="feature-row__item">
                        <FeatureFirt feature={FeatureConstanst[0]} />
                    </li>
                    <li className="feature-row__item">
                        <img src={Images.PRODUCT_TRE} alt="feature"></img>
                    </li>
                    <li className="feature-row__item">
                        <FeatureFirt feature={FeatureConstanst[1]} />
                    </li>
                </ul>
                <ul className="feature-row__list">
                    <li className="feature-row__item">
                        <FeatureFirt feature={FeatureConstanst[2]} />
                    </li>
                    <li className="feature-row__item">
                        <img src={Images.PRODUCT_COI} alt="feature"></img>
                    </li>
                    <li className="feature-row__item">
                        <FeatureFirt feature={FeatureConstanst[3]} />
                    </li>
                    <li className="feature-row__item">
                        <img src={Images.PRODUCT_LUCBINH} alt="feature"></img>
                    </li>

                </ul>
            </Row>
        </div>
    )
}

export default Feature;