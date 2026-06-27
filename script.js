function showName() {

    let name = document.getElementById("name").value;

    // Nếu nhập 36
    if (name === "36") {

        document.body.innerHTML = `
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

    // Các trường hợp còn lại
    document.getElementById("result").innerHTML = "Xin chào " + name + "!";
}
