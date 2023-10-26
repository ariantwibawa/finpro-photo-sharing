import axios from "axios";

const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";
// const token = localStorage.getItem("token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJhNTRjNTllNy1hMWI2LTRhYzQtYWU3Yi05ODg1YTk4ZWQ4NjkiLCJyb2xlIjoiZ2VuZXJhbCIsImlhdCI6MTY4MTAxMzEzN30.AxhIjhRXMoFoxldGOqwLur6jNBC-mx9-Ig18RWfYkLM";
const headers = {
  apiKey: apiKey,
  "Content-Type": "application/json",
};
const config = {
  Authorization: `Bearer ${token}`,
  apiKey: apiKey,
  "Content-Type": "application/json",
};

export const loginData = (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login",
      payload,
      { headers: headers }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const exploreData = () => {
  return axios
    .get(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=10&page=1",
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const followingData = () => {
  return axios
    .get(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/my-following?size=10&page=1",
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const userIdData = () => {
  return axios
  .get(
    "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user/`${}`",
    {headers: config}
  )
  .then((res) => res)
  .catch((err) => {
    throw err;
  });
}
