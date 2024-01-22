import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBfQXIwk_GPu5yXkqq7nC_Y9vgJ0Qa0TKw",
    authDomain: "trialbot-380812.firebaseapp.com",
    databaseURL: "https://trialbot-380812-default-rtdb.firebaseio.com",
    projectId: "trialbot-380812",
    storageBucket: "trialbot-380812.appspot.com",
    messagingSenderId: "624181714783",
    appId: "1:624181714783:web:594207d75a1c1f4dbca0ea",
    measurementId: "G-S56186FF94"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const submissionsRef = ref(db, 'TrialBot');
onValue(submissionsRef, (snapshot) => {
    const data = snapshot.val();
    updateTable(data);
});

function updateTable(data) {
    const tableBody = document.getElementById('submissions-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing data

    let count = 0;
    for (const key in data) {
        count++;
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = count;
        row.insertCell(1).innerText = data[key].title;
        row.insertCell(2).innerText = data[key].issue;
        row.insertCell(3).innerText = data[key].type;
        const deleteCell = row.insertCell(4);
        deleteCell.innerHTML = '<span class="delete-tick">&#10003;</span>';
        deleteCell.addEventListener('click', () => deleteEntry(key));
    }
}

function deleteEntry(key) {
    const entryRef = ref(db, `TrialBot/${key}`);
    remove(entryRef);
}
