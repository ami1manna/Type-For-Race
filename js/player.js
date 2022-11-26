

// find room name 
//cookies 
cookiesarray = document.cookie.split(";");
var room;
for (let i = 0; i < cookiesarray.length; i++) {
  if (cookiesarray[i].split("=")[0] == "room");
  room = cookiesarray[i].split("=")[1];
}
const rand = Math.floor(Math.random() * (10000000 - 1) + 1);
console.log(rand);
var restplayerlength, percent, array;

const setOfWord = ["centuries, but also the leap into electronic typesetting, remaining essentially"];

var strarray = setOfWord[0].split(' ');


//
const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;

const compareWords = (actual, user) => {
  let words1 = actual.split(" ");
  let words2 = user.split(" ");
  let cnt = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  let errorWords = words1.length - cnt;
  return " correct Words = " + cnt + " errors =" + errorWords;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

const playGame = () => {
  let para = 0;
  Math.floor(Math.random() * setOfWord.length);
  // console.log(setOfWord[para]);

  










 
  console.log(strarray);
  for( i = 0 ; i < strarray.length ; i++){
if(i !=strarray.length-1){
msg.innerHTML +="<span class=high>"+strarray[i]+" </span>";
}
else if(i==strarray.length-1){
  msg.innerHTML +="<span class=high>"+strarray[i]+"</span>";
}

  }

  console.log(msg.innerHTML);
  
  //msg.innerText = ;//setOfWord[randomNumber];
  let date = new Date();
  startTime = date.getTime(); //get starting time
  console.log("start time " +startTime);
  // btn.innerText = "Done";
};
const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  console.log("end time " +endTime);
  let totalTime = Math.round((endTime - startTime) / 1000);

  console.log("total time  " + totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  // final
  let finalMsg =
    "WPM= " + speed + " " + compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};




// add event to button ready
btn.addEventListener("click", function () {
  // making ready attribute of table true 
  $.ajax({
    url: "./player.php",
    data: { ready: 'true', id: 1, rand: rand },
    type: "POST",
    success: function (result) {
      console.log('ready');

    }
  });

  //  typeWords.disabled = false;
  // playGame();
  // } else if ((this.innerText = "Done")) {
  //  btn.innerText = "Start";
  //  typeWords.disabled = true;
  //  btn.innerText = "Start";
  //  endPlay();
  // }
});








var imageinterval = setInterval(imageTranslate,1000);
function imageTranslate() {
  
 
  let totalStr = typeWords.value; // user typed text
  let actualpara = msg.innerText; // displayed text 

  percent = (totalStr.length / actualpara.length) * 100;
  // console.log(percent);
  if (percent >= 100) {
    typeWords.disabled = true;
   window.clearInterval(readystate);
   window.clearInterval(imageinterval);
    console.log('readystate interval closed');
    endPlay();

    // close();

  }
  else {
    const element = document.querySelector("#img1");
    element.style.left = percent + "%";
  }
}


// highlighter 
function highlighter(){
  var userarr = typeWords.value.split(' ');
  var disarr =msg.innerText.split(' ') ;





  for(i = 0 ; i <userarr.length; i++ ){
   console.log("--" +userarr[i] + " --" + disarr[i]+"--");
if(userarr[i]==disarr[i]){
  document.querySelectorAll('.high')[i].style.backgroundColor= "green";

}
else{
  document.querySelectorAll('.high')[i].style.backgroundColor= "red";

}

  
}



}



















// console.log   (room);
// continuos ly calling function 
setInterval(myTimer, 1000);
function myTimer() {


  $.ajax({
    url: "./player.php",
    data: { length: percent, rand: rand, room: room, id: 2 },
    type: "POST",
    success: function (result) {
      rlength = result.toString();
      array = rlength.split("-1");
      //  console.log(array);
      document.querySelector("#img2").style.left = array[0] + "%";
      result /= 10;
      document.querySelector("#img3").style.left = array[1] + "%";
      result /= 10;
      document.querySelector("#img4").style.left = array[2] + "%";
      // uncomment this part ----------------------------------------------------


    }
  });
}




window.addEventListener("beforeunload", function () {
  window.location = "www.msbte.org.in"
});
function close() {
  beforeclose();
  return "Write something clever here...";
}
function beforeclose() {
  console.log("before close");
  $.ajax({
    url: "./delete.php",
    data: { rand: rand },
    type: "POST",
    success: function (result) {
      console.log(result);

    }
  });
}


// console.log(document.getElementById("msg").innerText);






var readystate = setInterval(function () {


  $.ajax({
    url: "./player.php",
    data: { room: room, id: 3 },
    type: "POST",
    success: function (result) {
      state = result.toString();
      console.log(state);
      if (state == 'true') {
        console.log("all player are ready now you can start ");
        typeWords.disabled = false;
        playGame();
        clearInterval(readystate);
      }
      else { typeWords.disabled = true; }//delee this code
    }
  });



}, 1000);
