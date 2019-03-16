const name = document.querySelector(".js-name"),
    input = name.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    name.classList.add(SHOWING_CN);
    name.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    name.classList.remove(SHOWING_CN);
    name.classList.add("name");
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요 ${text} 님`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();