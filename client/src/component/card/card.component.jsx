import "./card.styles.scss";

// packages
import { Link } from "react-router-dom";

export default function Card({ student: { _id, name, phone } }) {
  return (
    <Link to={`/${_id}`}>
      <div className="card">
        <div className="left">
          <img src="./avatar.png" alt="avatar" />
        </div>
        <div className="right">
          <h4>{name}</h4>
          <p>
            <span>phone:</span> {phone}
          </p>
          <p className="link">show more details</p>
        </div>
      </div>
    </Link>
  );
}
