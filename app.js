var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(textInput) {
    return serverURL + "?" + "text=" + textInput.value;
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("something wrong with server!! please try again.")

}

function clickHandler() {


    fetch(getTranslationURL(textInput))
        .then(Response => Response.json())
        .then(json => {
            textOutput.innerText = json.contents.translated;
        })
        .catch(errorHandler)

}
btnTranslate.addEventListener("click", clickHandler)