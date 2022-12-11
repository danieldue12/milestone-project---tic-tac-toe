function openPlayerConfig(event ) {
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId
    playerConfigOverlayElement.style.display = "block";
    backDropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backDropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error")
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target); 
    const enteredPlayername = formData.get("playerName").trim(); //trim() gets rid of useless white spaces    

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Enter a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" 
    +  editedPlayer + "-data")

    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    players[editedPlayer - 1].name = enteredPlayername

    closePlayerConfig();

}