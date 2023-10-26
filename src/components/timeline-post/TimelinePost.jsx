import React from "react";
import useExplore from "../../hooks/useExplore";
import "./timelinePost.css";

export default function TimelinePost() {
  const { explore, handleUser } = useExplore();
  return (
    <div className="card mb-3 ">
      {explore.map((item, key) => (
        <div key={key}>
          <img className="card-img-top" src={item?.imageUrl} alt="" />
          <div className="card-body">
            <button className="btn" onClick={() => handleUser(item?.userId)}>

              <p>{item?.user?.username}</p>
            </button>
            <p>{item?.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
