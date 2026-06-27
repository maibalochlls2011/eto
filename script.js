function showName() {

    let name = document.getElementById("name").value;

    if (name == "36") {

        document.body.innerHTML = `
        <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        font-size:400px;
        font-weight:bold;
        color:red;
        background:black;">
        36
        </div>
        `;

        return;
    }

    document.getElementById("result").innerHTML = "Xin chào " + name + "!";
}
