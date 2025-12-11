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
    if(data.bonus) {
      document.getElementById("result").innerHTML = `Вы получили <b>${data.bonus}</b> бонусов!`;
    } else {
      document.getElementById("result").innerText = data.error || "Ошибка";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("result").innerText = "Ошибка при отправке данных";
  });
}