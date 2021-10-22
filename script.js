let request = new XMLHttpRequest();
request.open('GET', 'cheems.json')
request.responseType = 'json';
request.send();
var obj;
request.onload = function () {
    obj = request.response;
}

function generateCheems() {
    var cheemNo = Math.floor(Math.random() * obj.length);
    var image = document.createElement('img');
    var div = document.getElementById('cheems-box-gen');
    image.src = obj[cheemNo];
    div.appendChild(image);
}