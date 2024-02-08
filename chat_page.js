var firebaseConfig = {
    apiKey: "AIzaSyBKqhOYgBwnuTUNBSF0uZMLA2Lf6ljyQEc",
    authDomain: "lets-chat-web-app-eff89.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-eff89-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-eff89",
    storageBucket: "lets-chat-web-app-eff89.appspot.com",
    messagingSenderId: "270594270833",
    appId: "1:270594270833:web:51b096699507fdda4f5dd0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
 getData();

 function send(){
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
 }