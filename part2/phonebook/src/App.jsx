import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Numbers from "./components/Numbers/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1488-322-228" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const onChangeSetNewName = (e) => {
    setNewName(e.target.value);
  };

  const onChangeSetNewNumber = (e) => {
    setNewNumber(e.target.value);
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
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <Header text={"Phonebook"} />
      <Form
        onNameChangeHandler={onChangeSetNewName}
        onNumberChangeHandler={onChangeSetNewNumber}
        onClickHandler={onClickAddNewPerson}
        nameValue={newName}
        numberValue={newNumber}
      />
      <Header text={"Numbers"} />
      <Numbers numberList={persons} />
    </div>
  );
};

export default App;
