/* eslint-disable no-unused-vars */

const error = {
  color: "red",
  fontSize: 24,
  border: "2px dotted red",
  margin: "12px 0",
};

const success = {
  color: "green",
  fontSize: 24,
  border: "2px dotted green",
  margin: "12px 0",
};

function Notification({ message, messageType }) {
  if (!message) {
    return <></>;
  }
  return <p style={eval(messageType)}>{message}</p>;
}

export default Notification;
