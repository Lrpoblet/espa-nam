import { Link } from 'react-router-dom';
import madrid from '../images/maps/madrid.gif';
// import '../styles/Madrid.scss';

function Madrid() {
  return (
    <>
      <button>
        <Link to="/">GET BACK</Link>
      </button>

      <Link to="/Card">
        <i class="fa-solid fa-location-dot"> </i>
      </Link>

      <div className="container">
        <img src={madrid} alt="" className="map" />
      </div>
    </>
  );
}

export default Madrid;
