import { useState } from "react";
import { Collapse } from "react-bootstrap";
import './CategoryItem.scss'
CategoryItem.defaultProps = [

]
function CategoryItem(props) {
    const [open, setOpen] = useState(false);
    const item = props.items;
    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="category-item"
            >
                <div>{item.title}</div>
                <i className="down-icon fas fa-angle-down"></i>

            </div>
            <Collapse in={open}>
                <ul className="category-collapse__list">
                    {item.child.map((child)=>{
                        return(
                            <li key={child.id} className="category-collapse__item">
                                {child}
                            </li>
                        )
                    })}
                </ul>
            </Collapse>
        </>
    );
}

export default CategoryItem;