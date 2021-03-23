import { Col, Container, Row } from "react-bootstrap"
import ProductsConstant from "../../../constants/product"
import "./ListProduct.scss"
import ProductCard from "./ProductCard"
function ListProduct() {
    return (
        <div className="list-product">
            <Container>
                <div className="list-product__title">Sản phẩm bán chạy</div>
                <Row>
                    {ProductsConstant.map((item) => {
                        return( 
                            <Col key={item.description}  lg={3}>
                                <ProductCard product={item}/>
                            </Col>
                    )})}
                </Row>
            </Container>
        </div>
    )
}
export default ListProduct;