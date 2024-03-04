var firebaseConfig = {
    apiKey: "AIzaSyCFa0mbCxrE09tXeNbUilu6NLpWvahtKD8",
    authDomain: "chatter-fom9.firebaseapp.com",
    databaseURL: "https://chatter-fom9-default-rtdb.firebaseio.com",
    projectId: "chatter-fom9",
    storageBucket: "chatter-fom9.appspot.com",
    messagingSenderId: "822733076926",
    appId: "1:822733076926:web:752b41cfc16ab6c31521ef"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room name", room_name)

    window.location = "chat_room.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_room.html";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}