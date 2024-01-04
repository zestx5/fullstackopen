import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Numbers from "./components/Numbers/Numbers";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const onChangeSetNewName = (e) => {
    setNewName(e.target.value);
  };

  const onClickAddNewPerson = (e) => {
    e.preventDefault();
    if (newName == "") return;
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <div>
      <Header text={"Phonebook"} />
      <Form
        onChangeHandler={onChangeSetNewName}
        onClickHandler={onClickAddNewPerson}
        value={newName}
      />
      <Header text={"Numbers"} />
      <Numbers numberList={persons} />
    </div>
  );
};

export default App;
