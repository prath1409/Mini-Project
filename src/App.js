import React, { useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Filter = require("bad-words");
//const filter = new Filter();
var filter=new Filter();
filter.addWords('bomb','bombs','guns','gun');
firebase.initializeApp({
  apiKey: "AIzaSyB2tRp5HQtPpUOVk-jdCP2U4fp4lXyXVJI",
  authDomain: "mini-project-ca10d.firebaseapp.com",
  projectId: "mini-project-ca10d",
  storageBucket: "mini-project-ca10d.appspot.com",
  messagingSenderId: "605424166905",
  appId: "1:605424166905:web:001bbcd9dcbb2478317f28",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <BOX /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function BanButton() {
  return (
    <button className="sign-out" onClick={() => auth.signOut()}>
      BANNED
    </button>
  );
}

function BOX() {
  const [ban, setBan] = useState(false);
  const { uid, photoURL } = auth.currentUser;
  let tmp = firestore
    .collection("banned")
    .where("uid", "==", uid)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        setBan(true);
      });
      return querySnapshot;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
      return false;
    });
  return <>{ban ? <BanButton /> : <ChatRoom />}</>;
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const bannedRef = firestore.collection("banned");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    let msg = formValue;
    let bannedUser = false;
    const setBannedUser = () => {
      console.log(bannedUser);
      bannedUser = true;
      console.log(bannedUser);
    };
    let tmp = firestore
      .collection("banned")
      .where("uid", "==", uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          setBannedUser();
        });
        return querySnapshot;
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
        return false;
      });

    // console.log("b", bannedUser, tmp);

    if (filter.isProfane(formValue)) {
      window.location.reload();
      // setFormValue(filter.clean(formValue));
      msg = filter.clean(formValue);
      bannedRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
    }

    await messagesRef.add({
      text: msg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
