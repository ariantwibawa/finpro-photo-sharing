import "./message.css";
import { Link } from "react-router-dom";

// Api
import useMyFollowing from "../../hooks/useMyFollowing";

// FontAwesomeIcon.........
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Message() {
  const {myFollowing} = useMyFollowing () 
  return (
    <div className="message">
      <div className="message-top">
        <div className="following">
          <h4>Following</h4>
          <FontAwesomeIcon icon={faSearch} />
          {myFollowing.map((item,key) => (
            <div key={key}>
              <p>
                {item.username}
              </p>
              <img src= {item.profilePictureUrl}/>
            </div>
          ) )}
        </div>

        <div className="followers">
          <h4>Followers</h4>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      {}
    </div>
  );
}
