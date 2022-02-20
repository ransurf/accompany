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
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <form onSubmit={sendMessage} className="form">
          <input
            className="input"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, name } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src="https://picsum.photos/200/300" />
      <p>{text}</p>
      <p>-</p>
      <p>{name}</p>
    </div>
  );
}