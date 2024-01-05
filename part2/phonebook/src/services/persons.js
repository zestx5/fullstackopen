import axios from "axios";

const getAll = () => {
  return axios
    .get("http://localhost:3001/persons")
    .then((d) => d.data)
    .catch((err) => {
      console.log(err.message);
    });
};

const create = (person) => {
  return axios
    .post("http://localhost:3001/persons", person)
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const remove = (id) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default { getAll, create, remove };
