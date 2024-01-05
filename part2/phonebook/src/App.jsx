import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Numbers from "./components/Numbers/Numbers";
import Filter from "./components/Filter/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

  const fetchPersonData = () => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
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
    const person = { name: newName, number: newNumber };
    personService.newPerson(person);
    setPersons(persons.concat(person));
    setPersonsToShow(persons.concat(person));
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
