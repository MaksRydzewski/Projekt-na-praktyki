let curentday = document.getElementById("curentday");
let curentdate = document.getElementById("curentdate");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let taskname = document.getElementById("taskname");
let notename = document.getElementById("notename");
let high = document.getElementById("high");
let medium = document.getElementById("medium");
let low = document.getElementById("low");
let none = document.getElementById("none");
let taskslist = document.getElementById("taskslist");
let addday = document.getElementById("addday");
let adddate = document.getElementById("adddate");

//Tablice przechowywyujące taski
let firsttab = [];
let secondtab = [];
let thirdtab = [];
let fourthtab = [];
let fifthtab = [];

dayofweek();
today();
days();
calendarpage();

first.addEventListener("click", firstday);
second.addEventListener("click", secondday);
third.addEventListener("click", thirdday);
fourth.addEventListener("click", fourthday);
fifth.addEventListener("click", fifthday);

function firstday() {
  taskslist.innerHTML = "";
  for (let i = 0; i < firsttab.length; i++) {
    taskslist.innerHTML += firsttab[i].innerHTML;
  }
}

function secondday() {
  taskslist.innerHTML = "";
  for (let i = 0; i < secondtab.length; i++) {
    taskslist.innerHTML += secondtab[i].innerHTML;
  }
}

function thirdday() {
  taskslist.innerHTML = "";
  for (let i = 0; i < thirdtab.length; i++) {
    taskslist.innerHTML += thirdtab[i].innerHTML;
  }
}

function fourthday() {
  taskslist.innerHTML = "";
  for (let i = 0; i < fourthtab.length; i++) {
    taskslist.innerHTML += fourthtab[i].innerHTML;
  }
}

function fifthday() {
  taskslist.innerHTML = "";
  for (let i = 0; i < fifthtab.length; i++) {
    taskslist.innerHTML += fifthtab[i].innerHTML;
  }
}

function days() {
  let day = new Date();
  let curentday = day.getDate();
  first.innerHTML = "<h1>" + curentday + "</h1>";
  second.innerHTML = "<h1>" + (curentday + 1) + "</h1>";
  third.innerHTML = "<h1>" + (curentday + 2) + "</h1>";
  fourth.innerHTML = "<h1>" + (curentday + 3) + "</h1>";
  fifth.innerHTML = "<h1>" + (curentday + 4) + "</h1>";
}

function today() {
  let dateyear = new Date();
  curentdate.innerHTML =
    dateyear.getDate() +
    "." +
    +(dateyear.getMonth() + 1) +
    "." +
    dateyear.getFullYear();

  adddate.innerHTML =
    dateyear.getDate() +
    "." +
    +(dateyear.getMonth() + 1) +
    "." +
    dateyear.getFullYear();
}

function dayofweek() {
  let day = new Date();
  let week = new Array(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Suturday",
    "Sunday"
  );
  let today = day.getDay();
  for (let i = 0; i < week.length; i++) {
    if (today == i && today == 0) {
      curentday.innerHTML += week[6];
      addday.innerHTML += week[6];
    } else if (today == i && today != 0) {
      curentday.innerHTML += week[i - 1];
      addday.innerHTML += week[i - 1];
    }
  }
}

function calendarpage() {
  let date = new Date();
  let curentmonth = date.getMonth() + 1;
  let calendarpage = document.getElementById("calendarpage");
  if (curentmonth % 2 == 0) {
    for (let i = 0; i <= 30; i++) {
      let calendarday = document.createElement("button");
      calendarday.setAttribute("id", i);
      calendarday.setAttribute("class", "number");
      let daynumber = document.createTextNode(i);
      calendarday.appendChild(daynumber);
      calendarpage.appendChild(calendarday);
    }
  } else {
    for (let i = 0; i <= 31; i++) {
      let calendarpage = document.createElement("div");
      let daynumber = document.createTextNode(i);
      calendarpage.appendChild(daynumber);
      calendarpage.appendChild(calendarpage);
    }
  }
}

let calendardays = document.querySelectorAll(".number");

let calendardaynumber;

function clickfun(event) {
  let calendardayid = event.target.attributes["id"].value;
  calendardaynumber = calendardayid;
  return calendardaynumber;
}

for (let i = 0; i < calendardays.length; i++) {
  calendardays[i].addEventListener("click", clickfun, false);
}

let mondaytab = 0;
let tuesdaytab = 0;
let wednesdaytab = 0;
let thursdaytab = 0;
let fridaytab = 0;

function taskcreator() {
  let createtask = document.createElement("div");
  createtask.setAttribute("id", "div");

  let tasktitle = document.createElement("div");
  let new_task = document.createElement("div");
  let task_note = document.createElement("div");
  let tytulvalue = document.createTextNode(taskname.value);
  let notatka = document.createElement("div");
  let notatkavalue = document.createTextNode(notename.value);
  let priori = document.createElement("div");

  let priorivalue = document.createTextNode(on());

  tasktitle.setAttribute("class", "tasktile");
  tasktitle.setAttribute("id", "tasktitle");
  tasktitle.appendChild(tytulvalue);

  notatka.setAttribute("class", "notatka");
  notatka.setAttribute("id", "notaka");
  notatka.appendChild(notatkavalue);

  priori.setAttribute("class", "priori");
  priori.setAttribute("id", "priori");
  priori.appendChild(priorivalue);

  task_note.setAttribute("class", "task_note");
  task_note.appendChild(tasktitle);
  task_note.appendChild(notatka);

  new_task.setAttribute("class", "wypis");
  new_task.setAttribute("id", "wypis");
  new_task.appendChild(task_note);
  createtask.appendChild(new_task);

  new_task.appendChild(priori);


  let date = new Date();
  today = date.getDate();
  console.log(today + 1);
  if (calendardaynumber == today) {
    firsttab[mondaytab] = createtask;
    mondaytab++;
    firstday();
  } else if (calendardaynumber == today + 1) {
    secondtab[tuesdaytab] = createtask;
    tuesdaytab++;
    secondday();
  } else if (calendardaynumber == today + 2) {
    thirdtab[wednesdaytab] = createtask;
    wednesdaytab++;
    thirdday();
  } else if (calendardaynumber == today + 3) {
    fourthtab[thursdaytab] = createtask;
    thursdaytab++;
    fourthday();
  } else if (calendardaynumber == today + 4) {
    fifthtab[fridaytab] = createtask;
    fridaytab++;
    fifthday();
  }
}

let priority;
function on() {
  if (high.checked) {
    priority = "high 🔴";
    return priority;
  } else if (medium.checked) {
    priority = "medium 🟡";
    return priority;
  } else if (low.checked) {
    priority = "low 🟢";
    return priority;
  } else if (none.checked) {
    priority = "none ⚪";
    return priority;
  } else if ((undefined = true)) {
    priority = "none ⚪";
    return priority;
  }
}
