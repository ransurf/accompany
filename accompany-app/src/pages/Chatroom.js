import "./Chatroom.css";
import React from "react";
import { db, auth } from "../back-end/firestore/firebase.js";
import "firebase/firestore";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  limit,
  orderBy,
} from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";

//Only show chatroom is user is signed in
function ChatroomApp() {
  return (
    <div className="chatroom">
      <p>HELLO</p>
      <header>
        <section>
          <Chatroom />
        </section>
      </header>
    </div>
  );
}

function Chatroom() {
  const messagesRef = collection(db, "messages");
  const query = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: db.FieldValue.serverTimestamp(),
      uid,
    });

    setFormValue("");
  };

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src="https://picsum.photos/200/300" />
      <p>{text}</p>
    </div>
  );
}

export default ChatroomApp;
