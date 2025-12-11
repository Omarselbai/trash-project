function sendData() {
    const type = document.getElementById("type").value;
    const weight = parseFloat(document.getElementById("weight").value);

    fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, weight })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerHTML =
            `Вы получили <b>${data.bonus}</b> бонусов!`;
    });
}