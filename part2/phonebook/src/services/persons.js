import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:3001/persons").then((d) => d.data);
};

const create = (person) => {
  return axios.post("http://localhost:3001/persons", person).then((r) => {
    console.log(r);
  });
};

const remove = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`).then((r) => {
    console.log(r);
  });
};

const update = (person) => {
  return axios.put(`http://localhost:3001/persons/${person.id}`, person);
};

export default { getAll, create, remove, update };
