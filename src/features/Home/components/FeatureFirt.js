import { Link } from "react-router-dom";
import "./FeatureFirt.scss"
FeatureFirt.defaultProps = {
    feature: {
        title: "",
        intro: "",
        controlText: "Xem tiếp",
    }
}
function FeatureFirt(props) {
    const { title, intro, controlText } = props.feature;
    return (
        <div className="feature-firt">
            <Link to="#" className="feature-firt__title">{title}</Link>
            <div className="feature-firt__intro">{intro}</div>
            <Link to="#" className="feature-firt__more">{controlText}</Link>
        </div>
    )
}
export default FeatureFirt;