const DATA_URL = "json/data.json";
const container = document.getElementById("container");

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
  }
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar los datos');
    }
    return response.json();
  })
  .then(data => {
    const students = data.students;
    showData(students);
  })
  .catch(error => {
    console.error('Error:', error);
  });

