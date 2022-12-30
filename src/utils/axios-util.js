import axios from "axios";

const client = axios.create({
  baseURL: "https://crowncleanapi.herokuapp.com/",
});

export const request = ({ ...options }) => {
  let token = localStorage.getItem("accessToken");
  if (token) {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  const onSuccess = (response) => response;
  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
