/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let randomNumber_who = Math.floor(Math.random() * who.length);
  let randomNumber_action = Math.floor(Math.random() * action.length);
  let randomNumber_what = Math.floor(Math.random() * what.length);
  let randomNumber_when = Math.floor(Math.random() * when.length);
  let excuse =
    who[randomNumber_who] +
    " " +
    action[randomNumber_action] +
    " " +
    what[randomNumber_what] +
    " " +
    when[randomNumber_when];
  document.querySelector("#excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
