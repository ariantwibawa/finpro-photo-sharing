import { useState, useEffect } from "react";
import { followingData } from "../Api/data";


const useMyFollowing = () => {
  const [myFollowing, setMyFollowing] = useState([]);

  const getMyFollowing = () => {
    followingData()
      .then((res) => {
        const data = res?.data?.data?.users;
        setMyFollowing(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyFollowing();
  }, []);

  return { myFollowing };
};

export default useMyFollowing;
