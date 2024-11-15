import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, push, serverTimestamp, set, ref } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    const name = document.getElementById("name");
    const message = document.getElementById("message");

    const newMessage = push(messages);

    set(newMessage, {
        name: name.value,
        message: message.value,
        created_at: serverTimestamp()
    });

    name.value = "";
    message.value = "";
})