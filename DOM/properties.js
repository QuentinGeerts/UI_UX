function displayProperties(obj) {
    for (const key in obj) {
        document.getElementById('info').innerHTML += `<br>${key} : ${obj[key]}`;
    }
}

displayProperties(document);