const express = require("express");
const cors = require("cors");
const app = express();

//Added this line of code if the request has come from an HTML form
app.use(express.urlencoded({ extended: false }));

//Added this line of code if the request has come from Postman
app.use(express.json())

app.use(cors());

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];
console.log(messages);

let messageIDFromDatabase = messages.length - 1;

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

//Read all messages
app.get("/messages", function (request, response) {
  response.send(messages);
});

//Create a new message
app.post("/messages", function (request, response) {
  const requestBody = request.body;
  const { from, text } = requestBody;
  let createNewObj = { from, text };

  if (from === "" || text === "") {
    response.status(400).send(`Message was not CREATED`);
    return;
  } else {
    messageIDFromDatabase += 1;
    createNewObj.id = messageIDFromDatabase;

    messages.push(createNewObj);

    response.status(201).send(createNewObj);
  }
});

///Read one message specified by an ID
app.get("/messages/:id", function (request, response) {
  const requestedId = request.params.id;

  const filteredByID = messages.find((element) => element.id == requestedId);
  if (!filteredByID) {
    return response
      .status(404)
      .send(`Message with ID ${requestedId}  was not found`);
  }
  response.send(filteredByID);
});

//Delete a message, by ID
app.delete("/messages/:id", function (request, response) {
  const messageId = request.params.id;
  const result = messages.find((element) => element.id == messageId);
  if (!result) {
    response.status(404).send(`Message with ID ${messageId}  was not found`);
    return;
  }

  const findElementIndex = messages.findIndex(
    (element) => element.id == messageId
  );
  messages.splice(findElementIndex, 1);
  response.status(204).send();
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
