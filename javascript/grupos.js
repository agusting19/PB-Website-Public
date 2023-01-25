window.onload = function () {
  const firstGroup = document.getElementById("first");
  const secondGroup = document.getElementById("second");
  const thirdGroup = document.getElementById("third");
  const message = document.getElementById("message");

  currentDate = new Date();
  startDate = new Date(currentDate.getFullYear(), 0, 1);
  let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  let weekNumber = Math.ceil(days / 7);

  const offset = 0;
  const numGrupos = 3;

  let groupOfTheWeek = (weekNumber + offset) % numGrupos;

  const showRainbow = (group) => {
    message.innerHTML = "El grupo encargado de esta semana es: " + (group + 1);
    if (group === 0) {
      firstGroup.classList.add("selected");
      secondGroup.classList.remove("selected");
      thirdGroup.classList.remove("selected");
    } else if (group === 1) {
      firstGroup.classList.remove("selected");
      secondGroup.classList.add("selected");
      thirdGroup.classList.remove("selected");
    } else {
      firstGroup.classList.remove("selected");
      secondGroup.classList.remove("selected");
      thirdGroup.classList.add("selected");
    }
  };

  showRainbow(groupOfTheWeek);
};
