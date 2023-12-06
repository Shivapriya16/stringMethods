
function fnCall(key) {
    console.log(key)
    const value = document.getElementById("enterButton").querySelector("input").value;
    let result = null;
    let input = "";
    let arr = [];
    if (key == "subString" || key == "slice") {
        input = prompt("Enter the start and end number split by commos");
        arr = input.split(",");
    } else if (key == "replace") {
        input = prompt("Enter the values to replaced");
        arr = input.split(",");
    } else if (key == "concat") {
        input = prompt("Enter the another string to concat");
    }
    console.log(input)
    console.log(arr[0])
    switch (key) {
        case "length":
            result = value.length
            break;
        case "subString":
            result = value.substring(arr[0], arr[1])
            break;
        case "slice":
            result = value.slice(arr[0], arr[1])
            break;
        case "replace":
            result = value.replaceAll(arr[0], arr[1])
            break;
        case "upperCase":
            result = value.toUpperCase()
            break;
        case "lowerCase":
            result = value.toLowerCase()
            break;
        case "concat":
            console.log(input)
            result = value.concat(" ", input)
            break;
        case "trim":
            result = value.trim()
            break;
        case "split":
            result = value.split("")
            break;
        default: 
            break;
    }
    document.getElementById("result").querySelector("input").value = result;
}

