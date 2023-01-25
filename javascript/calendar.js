window.onload = function () {
  const calendar = document.querySelector("div.calendar");

  const calendario = [
    ["7/11 Angeline", "8/11 Enrique", "9/11 Victoria", "10/11 Lydia", "11/11 Julio"],
    ["14/11 Roy", "15/11 Cristopher", "16/11 Lina", "17/11 Braedon", "18/11 Marely"],
    ["21/11 Julio", "22/11 Angeline", "23/11 Enrique", "24/11 Victoria", "25/11 Lydia"],
    ["28/11 Marely", "29/11 Roy", "30/11 Cristopher", "1/12 Lina", "2/12 Braedon"],
    ["5/12 Lydia", "6/12 Julio", "7/12 Angeline", "8/12 Enrique", "9/12 Victoria"],
    ["12/12 Braedon", "13/12 Marely", "14/12 Roy", "15/12 Cristopher", "16/12 Lina"],
    ["19/12 Victoria", "20/12 Lydia", "21/12 Julio", "22/12 Angeline", "23/12 Cristopher"],
  ];

  const currentDate = () => {
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let formattedToday = dd + "/" + mm;
    return formattedToday;
  };

  function fillCalendar() {
    const daysOfWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    const date = currentDate();

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    let headerRow = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      let heading = document.createElement("th");
      heading.innerHTML = daysOfWeek[i];
      headerRow.appendChild(heading);
    }
    thead.appendChild(headerRow);

    calendario.map((week) => {
      let row = document.createElement("tr");
      let data = document.createElement("td");
      week.map((day) => {
        data = document.createElement("td");
        data.innerHTML = day;
        if (day.substring(0, day.indexOf(" ")) === date) {
          data.className = "today";
        }
        row.appendChild(data);
      });
      tbody.appendChild(row);
    });

    return calendar.appendChild(table);
  }

  fillCalendar();
};
