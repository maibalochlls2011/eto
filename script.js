function showName() {

    let name = document.getElementById("name").value;
    let music = document.getElementById("music");

    if (name === "36") {

        music.currentTime = 0;

        music.play().catch(err => {
            console.log(err);
        });

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
