/*<tbody>
<tr>
<td>Jaipur</td>
<td>Rajasthan</td>
<td>335701</td>
<td>India</td>
</tr>
</tbody> */
const table = document.getElementById("table");
const btn = document.getElementById("btn");

async function fetchData() {
  let url = "https://bus-booking-accio.onrender.com/all/cities";
  let response = await fetch(url);
  let data = await response.json();
  tableData(data.cities_list);
}

function tableData(loadList) {
  let tbody = document.createElement("tbody");
  for (let i = 0; i < loadList.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${loadList[i].city_name}</td>
  <td>${loadList[i].state}</td>
  <td>${loadList[i].pincode}</td>
  <td>${loadList[i].country}</td>
  `;
    tbody.append(tr);
  }
  table.appendChild(tbody);
}

function clearData() {
  let tBody = table.getElementsByTagName("tbody")[0];
  if (tBody === undefined) {
    return;
  }
  tBody.remove();
}

btn.addEventListener("click", () => {
  clearData();
  fetchData();
});
