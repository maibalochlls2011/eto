function showName() {

    let name = document.getElementById("name").value;

    if (name === "36") {

        document.getElementById("music").play();

        document.getElementById("content").innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            width:100vw;
            height:100vh;
            background:black;
            color:red;
            font-size:40vw;
            font-weight:bold;
        ">
            36
        </div>
        `;

        return;
    }

    document.getElementById("result").innerHTML =
        "Xin chào " + name + "!";
}
