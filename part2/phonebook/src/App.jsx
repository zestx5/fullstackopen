import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Numbers from "./components/Numbers/Numbers";
import Filter from "./components/Filter/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

  const fetchPersonData = () => {
    axios.get("http://localhost:3001/persons").then((d) => {
      setPersons(d.data);
      setPersonsToShow(d.data);
    });
  };

  useEffect(fetchPersonData, []);

  const onChangeSetNewName = (e) => {
    setNewName(e.target.value);
  };

  const onChangeSetNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const onChangeSetFilter = (e) => {
    setFilter(e.target.value);
    setPersonsToShow(
      persons.filter((p) =>
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onClickAddNewPerson = (e) => {
    e.preventDefault();
    if (newName == "") return;
    if (
      persons.find(
        (p) => p.name.toLocaleLowerCase() == newName.toLocaleLowerCase()
      )
    ) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    axios
      .post("http://localhost:3001/persons", {
        name: newName,
        number: newNumber,
      })
      .then((r) => {
        console.log(r);
      });

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setPersonsToShow(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
    setFilter("");
  };

  return (
    <div>
      <Header text={"Phonebook"} />
      <Filter onChangeHandler={onChangeSetFilter} value={filter} />
      <Header text={"add a new"} />
      <Form
        onNameChangeHandler={onChangeSetNewName}
        onNumberChangeHandler={onChangeSetNewNumber}
        onClickHandler={onClickAddNewPerson}
        nameValue={newName}
        numberValue={newNumber}
      />
      <Header text={"Numbers"} />
      <Numbers numberList={personsToShow} />
    </div>
  );
};

export default App;
