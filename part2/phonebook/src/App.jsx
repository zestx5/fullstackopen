import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Numbers from "./components/Numbers/Numbers";
import Filter from "./components/Filter/Filter";
import personService from "./services/persons";
import Notification from "./components/Notification";

const MESSAGE = {
  error: "error",
  success: "success",
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

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

  const setNotification = (msg, type) => {
    setMessageType(type);
    setNotificationMessage(msg);
    setTimeout(() => {
      setMessageType(null);
      setNotificationMessage(null);
    }, 5000);
  };

  const onClickAddNewPerson = (e) => {
    e.preventDefault();
    if (newName == "") return;
    const personExists = persons.find(
      (p) => p.name.toLocaleLowerCase() == newName.toLocaleLowerCase()
    );
    if (personExists) {
      personExists.number = newNumber;
      if (window.confirm(`Update ${newName} number ?`)) {
        personService.update(personExists).then(() => {
          fetchPersonData();
          setNotification("User updated", MESSAGE.success);
        });
        setNewName("");
        setNewNumber("");
        setFilter("");
      }
      return;
    }
    const person = { name: newName, number: newNumber };
    personService
      .create(person)
      .then(() => {
        fetchPersonData();
        setNotification("User created", MESSAGE.success);
      })
      .catch(() => {
        setNotification("Create error", MESSAGE.error);
      });
    fetchPersonData();
    setNewName("");
    setNewNumber("");
    setFilter("");
  };

  const onClickDeletePerson = (id) => {
    if (window.confirm("Delete this person?")) {
      personService
        .remove(id)
        .then(() => {
          fetchPersonData();
          setNotification("User deleted", MESSAGE.success);
        })
        .catch(() => {
          setNotification("Delete error", MESSAGE.error);
        });
    }
  };

  return (
    <div>
      <Header text={"Phonebook"} />
      <Notification message={notificationMessage} messageType={messageType} />
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
      <Numbers
        numberList={personsToShow}
        onClickDeleteHandler={onClickDeletePerson}
      />
    </div>
  );
};

export default App;
