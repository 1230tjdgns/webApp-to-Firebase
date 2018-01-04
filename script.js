// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var config = {
  apiKey: "AIzaSyCZMiOFb7RsFKeTqlt7AD6ljIDFurtxOQs",
  authDomain: "tut-b564b.firebaseapp.com",
  databaseURL: "https://tut-b564b.firebaseio.com",
  projectId: "tut-b564b",
  storageBucket: "tut-b564b.appspot.com",
  messagingSenderId: "549937247062"
};
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
      $(".lightStatus").text("The light is on");
    } else {
      $(".lightStatus").text("The light is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");

    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
