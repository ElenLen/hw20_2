"use strict";

function onClick() {
  // см выбранное значение сущности
  let type = document.getElementById("type");
  let selType = type.options[type.selectedIndex].value;
  // см выбранный id сущности
  let idType = document.getElementById("idAtr").value;
  try {
    console.log("Выбранная сущность: " + selType);
    console.log("Выбранный id: " + idType);
    fetch("http://swapi.py4e.com/api/" + selType + "/" + idType)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log(
          "Адрес: " + "http://swapi.py4e.com/api/" + selType + "/" + idType
        );
        console.log(user);
        // см какую сущность выбрал пользователь, выводим соотв поля
        switch (selType) {
          case "films":
            document.getElementById("text").innerHTML =
              "Режиссер: " + user.director;
            break;
          case "people":
            document.getElementById("text").innerHTML = "Имя: " + user.name;
            break;
          case "planets":
            document.getElementById("text").innerHTML =
              "Название планеты: " + user.name;
            break;
          case "species":
            document.getElementById("text").innerHTML =
              "Тип персонажа: " + user.name;
            break;
          case "starships":
            document.getElementById("text").innerHTML =
              "Название космического корабля: " + user.name;
            break;
          case "vehicles":
            document.getElementById("text").innerHTML =
              "Название ранспортного средства: " + user.name;
            break;
        }
      })
      .catch((error) => {
        document.getElementById("text").innerHTML = "Ошибка: " + error;
        console.log(error);
      });
  } catch (error) {
    console.log("Ошибка: " + error);
  } finally {
    console.log("finaly");
  }
}
