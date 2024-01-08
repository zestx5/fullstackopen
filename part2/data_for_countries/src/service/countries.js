import axios from "axios";

const URL = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = () => {
  return axios.get(URL + "all").then((data) => {
    return data.data;
  });
};

export default { getAll };
