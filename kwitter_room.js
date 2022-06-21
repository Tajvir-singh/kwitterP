
const firebaseConfig = {
      apiKey: "AIzaSyAPZ8oZtyuK7GOayvUa9VkiXrkfbcc2g38",
      authDomain: "kwitter-fbb94.firebaseapp.com",
      projectId: "kwitter-fbb94",
      storageBucket: "kwitter-fbb94.appspot.com",
      messagingSenderId: "761260701414",
      appId: "1:761260701414:web:77dd101796e8f9fb8bed27"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
