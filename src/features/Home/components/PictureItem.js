import { useState } from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import './PictureItem.scss'
const customStyles = {
    overlay:{
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    }
  };
ReactModal.setAppElement('#root');
function PictureItem(props) {
    const { id, image } = props.image;
    const [ isShowModal, setIsShowModal] = useState(false);
    const handleOpenModal = () => {
        setIsShowModal(true);
    }
    const handleCloseModal = () => {
        setIsShowModal(false);
    }
    return (
        <div className="picture-item">
            <Link to="#" className="picture-item__link" onClick={handleOpenModal}>
                <img id={id} className="picture-item__link-img" src={image} alt="album-img"></img>
            </Link>
            <ReactModal 
                isOpen={isShowModal}
                onRequestClose={handleCloseModal}
                style={customStyles}
                >
                <img className="picture-item__link-img --modal" src={image} alt="album-img"></img>
            </ReactModal>
        </div>
    )
}
export default PictureItem;