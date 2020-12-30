let button = document.getElementById('button');

const fetchData = async () => {
  let url =
    'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';
  let data = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Locations</h2>';
      data.map((x) => {
        output += `
              <div class='card'>
              <h3>${x.name}</h3>  
              <h5>${x.capital}</h5>
              </div>
              `;
      });
      document.getElementById('output').innerHTML = output;
    });
};
button.addEventListener('click', fetchData);
