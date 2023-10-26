import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const User = () => {
  const [userPost, setUserPost] = useState([]);
  const [userById, setUserById] = useState({});
  const [totalPost, setTotalPost] = useState("");
  const param = useParams();
  const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJhNTRjNTllNy1hMWI2LTRhYzQtYWU3Yi05ODg1YTk4ZWQ4NjkiLCJyb2xlIjoiZ2VuZXJhbCIsImlhdCI6MTY4MTAxMzEzN30.AxhIjhRXMoFoxldGOqwLur6jNBC-mx9-Ig18RWfYkLM";

  const config = {
    Authorization: `Bearer ${token}`,
    apiKey: apiKey,
    "Content-Type": "application/json",
  };

  const getUserPost = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${param.id}?size=10&page=1`,
        { headers: config }
      )
      .then((res) => {
        const data = res?.data?.data?.posts;
        const totalPost = res?.data?.data?.totalItems;
        setUserPost(data);
        setTotalPost(totalPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserById = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user/${param.id}`,
        { headers: config }
      )
      .then((res) => {
        const data = res?.data?.data;
        setUserById(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    {
      getUserPost(), getUserById();
    }
  }, []);

  return (
    <div>
      <div>
        <img src={userById?.profilePictureUrl} />
        <p>{userById?.username}</p>
        <p>{userById?.name}</p>
        <p>{userById?.bio}</p>
        <p>{userById?.totalFollowing}</p>
        <p>{userById?.totalFollowers}</p>
      </div>
    </div>
  );
};
export default User;
