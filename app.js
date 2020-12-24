let button = document.getElementById('button');

const fetchData = async () => {
  let url = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3';
  let data = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Api Results - Food Recipe</h2>';
      data.results.map((x) => {
        output += `
              <div class='card'>
              <h6>${x.title}</h6>
              <span>${x.ingredients}</span>
              <a href="${x.href}"></a>
              </div>
              `;
      });
      document.getElementById('output').innerHTML = output;
    });
};
button.addEventListener('click', fetchData);
