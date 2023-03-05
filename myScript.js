function getTripsNumber() {
    let cards = document.getElementsByClassName("card");
    let dayOfferSection = document.getElementById("day-offer");
    let dayOfferts = dayOfferSection.getElementsByTagName("img");
    return cards.length + dayOfferts.length;
}

function displayBadge(event) {
    let parent = event.target.parentNode;
    let span = parent.getElementsByTagName("span")[0];
    if (span !== undefined) {
        span.classList.remove("d-none");
    }
}

function hiddenBadge(event) {
    let parent = event.target.parentNode;
    let span = parent.getElementsByTagName("span")[0];
    if (span !== undefined) {
        span.classList.add("d-none");
    }
}

/*rimuove tutte le card della pagina
funzione non associata ad alcun evento */
function removeAllCards() {
    let cards = document.getElementsByClassName("card");
    for(let card of cards) {
        card.remove();
    }
}

window.onload = function() {
    let value = getTripsNumber();
    let newP = document.createElement("p");
    newP.innerText = "Numero di viaggi presentei nella pagina: " + value;
    newP.style.marginTop= "10px";
    newP.style.color = "red";
    let footer = document.getElementsByTagName("footer")[0];
    footer.append(newP);

    let summerSection = document.getElementById("welcome-summer-section");
    let cards = summerSection.getElementsByClassName("card");
    for(let card of cards) {
        let image = card.getElementsByTagName("img")[0];
        image.addEventListener("mouseover", displayBadge);
        image.addEventListener("mouseout", hiddenBadge);
    }
}

