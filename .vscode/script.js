// ==========================
// LOGIN PAGE
// ==========================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        window.location.href = "index.html";

    });

}


// ==========================
// HOME PAGE LOGIN BUTTON
// ==========================

const headerLoginBtn = document.getElementById("headerLoginBtn");

if (headerLoginBtn) {

    headerLoginBtn.addEventListener("click", function () {

        window.location.href = "login.html";

    });

}


// ==========================
// SEARCH
// ==========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    const cards = document.querySelectorAll(".food-card, .brand-card");

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();

        cards.forEach(function (card) {

            const text = card.innerText.toLowerCase();

            if (text.includes(searchText)) {

                card.style.display = "inline-block";

            } else {

                card.style.display = "none";

            }

        });

    });

}