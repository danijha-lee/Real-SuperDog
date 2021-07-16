function getNumbers() {
    //access the webpage and get the values from the inputs
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    let newStart = parseInt(startValue);
    let newEnd = parseInt(endValue);

    let errorState = false;
    let errorMsg = "";

    if (isNaN(newStart) || isNaN(newEnd)) {
        errorState = true;
        errorMsg += "Please use numbers&lthr/>";

    }

    if (newStart > newEnd) {
        errorState = true;
        errorMsg += "Start value must be less than end value&lthr/>";
    }

    if (newStart > 10000 || newStart &lt -10000 || newEnd > 10000 || newEnd &lt -10000) {
        errorState = true;
        errorMsg += "-10,0000 and 10,000 are the limit&lthr/>"
    }

    if (errorState) {
        Swal.fire(
            'Something went wrong',
            'You clicked the button!',
            'error'
        )
        return;
    }
    //take the start and end values as the bounds for a 'for' loop
    //that will create an array and return it
    let numbers = generateNumbers(newStart, newEnd);

    //take the array that was returned and pass it to a function that will
    //display it
    displayNumbers(numbers);
}

//Wrapper function/method - a function that calls other functions

function generateNumbers(startValue, endValue) {
    let numbers = [];

    //loop over every number from startValue to endValue
    for (let index = startValue; index &lt= endValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

function displayNumbers(fluffyKitty) {
    let className = "even";
    let templateRows = "";

    for (let index = 0; index &lt fluffyKitty.length; index++) {
        let number = fluffyKitty[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows = templateRows + `&lttr>&lttd class="${className}">${number}&lt/td>&lt/tr>`;
    }

    document.getElementById("output").innerHTML = templateRows;
}