document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let displayedText = this.dataset.text;

            container.innerText = displayedText;
        });
    }
});