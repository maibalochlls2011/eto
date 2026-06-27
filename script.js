function showName() {
    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Xin chào " + name + "!";
}

function changeColor() {
    document.getElementById("title").style.color = "red";
}