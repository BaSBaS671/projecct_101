// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1UbmqKhRH1geSjc70aeyTOIANX_mZlr0",
    authDomain: "c-101-f823e.firebaseapp.com",
    databaseURL: "https://c-101-f823e-default-rtdb.firebaseio.com",
    projectId: "c-101-f823e",
    storageBucket: "c-101-f823e.appspot.com",
    messagingSenderId: "277312232426",
    appId: "1:277312232426:web:863978eb38ef8922d03093"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



