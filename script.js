const userImg = document.getElementsByClassName("user-img");
const menuList = document.getElementById("menu-list");
const body = document.querySelector("body");
function toggleMenu() {
  menuList.classList.toggle("show");
}
function hideMenu() {
  if (menuList.classList.contains("show")) {
    menuList.classList.remove("show");
  }
}

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email1");
const password = document.getElementById("password1");
function saveData() {
  localStorage.setItem("first", first.value);
  localStorage.setItem("last", last.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}

const emaillog = document.getElementById("email");
const passwordlog = document.getElementById("password");
const submit = document.getElementById("submit1");

function login() {
  if (
    emaillog.value === localStorage.getItem("email") &&
    passwordlog.value === localStorage.getItem("password")
  ) {
    submit.setAttribute("formaction", "./afterlogin.html");
  } else {
    alert("Incorrect email or password Login Failed!");
  }
}

const bidsec = document.getElementById("bid-sec1");
const form = document.getElementById("bid-form");
const successful = document.getElementById("successful");

function showup() {
  bidsec.classList.add("visible");
}
function hideup() {
  bidsec.classList.remove("visible");
}
const strbid = document.getElementById("str-bid");
const maxbid = document.getElementById("max-bid");

function submit2() {
  localStorage.setItem("strbid", strbid.value);
  localStorage.setItem("maxbid", maxbid.value);
  alert(
    "Straight Bid: " +
      localStorage.getItem("strbid") +
      " $ " +
      "Maximum Bid: " +
      localStorage.getItem("maxbid") +
      " $ "
  );
  alert("Bid submitted successfully!");
}
