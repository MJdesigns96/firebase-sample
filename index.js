import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY-rr6OESfcIh8yWlXC40o4EZZPCsZ0NQ",
    authDomain: "humberdemo-11.firebaseapp.com",
    projectId: "humberdemo-11",
    storageBucket: "humberdemo-11.firebasestorage.app",
    messagingSenderId: "156719163753",
    appId: "1:156719163753:web:b0a9f12e0797bcb604b5f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages")

// Load message on data event
onValue(messages, (snapshot) => {
    // Create a reference
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    // Loop through messages and add them to the ul
    snapshot.forEach((childSnapshot) => {
        // console.log(childSnapshot);
        // fetch the data from the snapshot
        const childData = childSnapshot.val();
        // create a text node with the message and name
        const text = document.createTextNode(
            childData.message + " ~ " + childData.name
        );
        // create a li element
        const li = document.createElement("li");
        // append the children
        li.appendChild(text);
        ul.appendChild(li);
    })
});