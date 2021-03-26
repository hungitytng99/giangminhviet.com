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
                            <Col key={item.description} xl={3} lg={4} md={4} sm={6} xs={12}>
                                <ProductCard product={item}/>
                            </Col>
                    )})}
                </Row>
            </Container>
        </div>
    )
}
export default ListProduct;