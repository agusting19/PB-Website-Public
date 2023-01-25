window.onload = function () {
  const tableDiv = document.querySelector('div.tableContainer');
  const tableDiv2 = document.querySelector('div.tableContainer2');
  const tableDiv3 = document.querySelector('div.tableContainer3');

  const fondo = [
    { nombre: 'Victoria', deuda: 0, pago: 600, registrado: '6/12' },
    { nombre: 'Cristopher', deuda: 0, pago: 1200, registrado: '8/12' },
    { nombre: 'Angeline', deuda: 0, pago: 3000, registrado: '15/12' },
    { nombre: 'Julio', deuda: 0, pago: 1200, registrado: '6/12' },
    { nombre: 'Roy', deuda: 0, pago: 850, registrado: '20/12' },
    { nombre: 'Braedon', deuda: 0, pago: 600, registrado: '12/12' },
    { nombre: 'Marely', deuda: 0, pago: 600, registrado: '12/12' },
    { nombre: 'Lina', deuda: 800, pago: 0, registrado: '-' },
    { nombre: 'Lydia', deuda: 600, pago: 0, registrado: '-' },
    { nombre: 'Enrique', deuda: 0, pago: 600, registrado: '14/12' },
  ];

  const fondoHeaders = ['Nombre', 'Deuda', 'Pagó', 'Registrado'];

  const gastos = [
    { gasto: 'Internet', monto: 1700, dia: '6/12' },
    { gasto: 'Gas', monto: 3900, dia: '12/12' },
  ];

  const gastosHeaders = ['Gasto', 'Monto', 'Dia'];

  let deudaTotal = 0; //deuda del mes pasado
  let fondoTotal = 790; //fondo del mes pasado

  const createTable = (data, headers, divOfTable) => {
    let table = document.createElement('table');
    let tableHeader = document.createElement('thead');
    let tableHeaderRow = document.createElement('tr');

    table.className = 'table';
    tableHeader.className = 'tableHeader';
    tableHeaderRow.className = 'tableHeaderRow';

    headers.map((header) => {
      let tableTh = document.createElement('th');
      tableTh.innerText = header;
      tableHeaderRow.append(tableTh);
    });

    tableHeader.append(tableHeaderRow);
    table.append(tableHeader);

    let tableBody = document.createElement('tbody');
    tableBody.className = 'tableBody';
    table.append(tableBody);
    divOfTable.append(table);

    if (data[0].nombre) {
      data.map((integrante) => {
        let tableBodyRow = document.createElement('tr');
        tableBodyRow.className = 'tableBodyRow';

        let nombre = document.createElement('td');
        let deuda = document.createElement('td');
        let pago = document.createElement('td');
        let registrado = document.createElement('td');

        nombre.innerText = integrante.nombre;
        deuda.innerText = '$' + integrante.deuda;
        pago.innerText = '$' + integrante.pago;
        registrado.innerText = integrante.registrado;

        deudaTotal += integrante.deuda;
        fondoTotal += integrante.pago;

        tableBodyRow.append(nombre, deuda, pago, registrado);
        tableBody.append(tableBodyRow);
      });
    } else {
      data.map((item) => {
        let tableBodyRow = document.createElement('tr');
        tableBodyRow.className = 'tableBodyRow';

        let gasto = document.createElement('td');
        let monto = document.createElement('td');
        let dia = document.createElement('td');

        gasto.innerText = item.gasto;
        monto.innerText = '$' + item.monto;
        dia.innerText = item.dia;

        fondoTotal -= item.monto;

        tableBodyRow.append(gasto, monto, dia);
        tableBody.append(tableBodyRow);
      });
    }
  };

  const createLastTable = (gastos, fondo, divOfTable) => {
    let table = document.createElement('table');
    let tableHeader = document.createElement('thead');
    let tableHeaderRow = document.createElement('tr');
    let firstTh = document.createElement('th');
    let secondTh = document.createElement('th');
    let tableBody = document.createElement('tbody');
    let tableBodyRow = document.createElement('tr');
    let firstTd = document.createElement('td');
    let secondTd = document.createElement('td');

    table.className = 'table3';
    tableHeader.className = 'tableHeader3';
    tableHeaderRow.className = 'tableHeaderRow3';
    tableBody.className = 'tableBody3';
    tableBodyRow.className = 'tableBodyRow3';

    firstTh.innerText = 'Deuda Total';
    secondTh.innerText = 'Fondo Total';
    tableHeaderRow.append(firstTh, secondTh);

    firstTd.innerText = '$' + gastos;
    secondTd.innerText = '$' + fondo;
    tableBodyRow.append(firstTd, secondTd);

    tableHeader.append(tableHeaderRow);
    tableBody.append(tableBodyRow);
    table.append(tableHeader);
    table.append(tableBody);
    divOfTable.append(table);
  };

  createTable(fondo, fondoHeaders, tableDiv);
  createTable(gastos, gastosHeaders, tableDiv2);
  createLastTable(deudaTotal, fondoTotal, tableDiv3);
};
