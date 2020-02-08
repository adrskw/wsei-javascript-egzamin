function getTagsOfElements(elements) {
    let tagsArray = [];

    for (var i = 0; i < elements.length; i++) {
        let elementTag = elements[i].tagName;

        tagsArray.push(elementTag);
    }

    return tagsArray;
}

function getClassesOfElement(element) {
    let classNamesArray = [];

    for (var i = 0; i < element.classList.length; i++) {
        let className = element.classList[i];

        classNamesArray.push(className);
    }

    return classNamesArray;
}

function getInnerTextsOfElements(elements) {
    let innerTextsArray = [];

    for (var i = 0; i < elements.length; i++) {
        let innerText = elements[i].innerText;

        innerTextsArray.push(innerText);
    }

    return innerTextsArray;
}

function getAddressesOfElements(elements) {
    let urlsArray = [];

    for (var i = 0; i < elements.length; i++) {
        let url = elements[i].getAttribute("href");

        urlsArray.push(url);
    }

    return urlsArray;
}

document.addEventListener("DOMContentLoaded", function () {
    // punkt 1
    const sampleClassElements = document.querySelectorAll(".sample_class");
    getTagsOfElements(sampleClassElements);

    console.log(getTagsOfElements(sampleClassElements)); // sprawdzenie

    // punkt 2
    const sampleIdElement = document.getElementById("sample_id");
    getClassesOfElement(sampleIdElement);

    console.log(getClassesOfElement(sampleIdElement)); // sprawdzenie

    // punkt 3
    const sampleClass2LiElements = document.querySelectorAll(".sample_class_2 li");
    getInnerTextsOfElements(sampleClass2LiElements);

    console.log(getInnerTextsOfElements(sampleClass2LiElements)); // sprawdzenie

    // punkt 4
    const allLinks = document.getElementsByTagName("a");
    getAddressesOfElements(allLinks);

    console.log(getAddressesOfElements(allLinks)); // sprawdzenie

    // punkt 5
    const sampleClass3Children = document.querySelector(".sample_class_3").children;
    getTagsOfElements(sampleClass3Children);

    console.log(getTagsOfElements(sampleClass3Children)); // sprawdzenie
});