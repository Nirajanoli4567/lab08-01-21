function showText(textbox) {
    // Get the value of the textbox
    var value = textbox.value;

    // Display the value in the result div
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = value;
}