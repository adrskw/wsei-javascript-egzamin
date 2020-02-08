document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const button3 = document.getElementById("button-3");
    const shoppingList = document.getElementById("shopping-list");

    button1.addEventListener("click", function () {
        let breadLiElement = document.createElement("li");
        breadLiElement.innerText = "chleb";

        shoppingList.appendChild(breadLiElement);
    });

    button2.addEventListener("click", function () {
        if (shoppingList.childElementCount > 0) {
            shoppingList.removeChild(shoppingList.lastElementChild);
        }
    });

    button3.addEventListener("click", function () {
        if (shoppingList.childElementCount >= 2) {
            let secondShoppingListElement = shoppingList.children[1];

            let newLiElement = document.createElement("li");
            newLiElement.innerText = secondShoppingListElement.innerText;

            shoppingList.appendChild(newLiElement);
        }
        else {
            alert("Lista zakupów zawiera mniej ni¿ dwa elementy!");
        }
    });
});