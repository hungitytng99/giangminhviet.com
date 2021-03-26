import { Link } from "react-router-dom";
import "./ProductCard.scss"
ProductCard.defaultProps = {
    product: {
        image: "",
        description: "",
        control: "Liên hệ",
    }
}
function ProductCard(props) {
    const { image, description, control } = props.product;
    return (
        <div className="product-card">
            <Link to="#" className="product-card__link">
                <img src={image} className="product-card__img" alt="product"></img>
            </Link>
            <Link to="#" className="product-card__description">{description}</Link>
            <div className="product-card__control">
                <Link to="#" className="product-card__contact">{control}</Link>
            </div>
        </div>
    )
}
export default ProductCard;