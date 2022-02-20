import "./Chatroom.css";
import React from "react";
import { db, auth } from "../back-end/firestore/firebase.js";
import "firebase/firestore";
import {
  query,
  collection,
  limit,
  orderBy,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";
import { Button } from "@mui/material";

export default function ChatroomApp() {
  return (
    <div className="flex-container">
      <div className="chatSection">
        <Chatroom />
      </div>
    </div>
  );
}

function Chatroom() {
  const prompts = [
    "Spend some time chatting amongst each other",
    "What was a stressful situation you handled well this week?",
    "What techniques have you found useful for reducing anxiety?",
    "What are some areas of your life that you could improve?",
    "What are some obstacles in achieving your ideal wellness?"
  ]
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
  const displayPrompt = () => {
    //prevent duplicate prompts
    let temp = prompts.filter(prompt => prompt !== currentPrompt);
    setCurrentPrompt(temp[Math.floor(Math.random() * prompts.length)]);
  }
  const messagesRef = collection(db, "messages");
  const query1 = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(query1, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;
    const name = auth.currentUser.displayName;
    console.log(name);
    console.log(auth.currentUser.displayName);
    console.log(auth.currentUser);

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid: uid,
      name: name,
    });

    setFormValue("");
  };

  return (
    <>
      <div className="parent">
        <div className="prompts">
          <h1>Guidance</h1>
          <Button 
          style={{"backgroundColor": "white", "color": "#3f51b5"}}
          variant="contained"
          onClick={displayPrompt}
          >New prompt</Button>
          {currentPrompt}
        </div>
        <div className="div2">
          <h1>Chat</h1>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <form onSubmit={sendMessage} className="form">
            <input
              className="input"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Remember you're all in this together"
            />
            <button type="submit" className="form-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, name } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className="message-container">
      <div className={`message ${messageClass}`}>
        {/* <span>{name}</span> */}
        <img className="img" src="https://picsum.photos/200/300" />
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
