const mainContainer = document.querySelector(".container");
const thankyouContainer = document.querySelector(".thankyou-container");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})