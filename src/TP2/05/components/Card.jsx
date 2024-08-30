import PropTypes from 'prop-types';
import "./cardC.css"

const Card = ({ titulo, texto }) => {
    return (
        
        <div className="card">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    );
};


Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
};
export default Card;
