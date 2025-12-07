let card = document.getElementById("card");
let showSignup = document.getElementById("showSignup");
let showLogin = document.getElementById("showLogin");

showSignup.onclick = () => {
    card.classList.add("flip");
};

showLogin.onclick = () => {
    card.classList.remove("flip");
};
