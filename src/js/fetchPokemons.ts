export async function fetchPokemons(searchString: string) {
  const valueExistsInLs = localStorage.getItem(searchString);

  if (valueExistsInLs) {
    return JSON.parse(valueExistsInLs);
  } else {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;

    let response: unknown[] = [];
    fetch(url)
      .then((data) => data.json())
      .then((result) => {
        response = result.results || [
          {
            name: searchString,
            url,
          },
        ];
      })
      .catch((err) => {
        response = [];
        if (err.toString().includes('Not found')) {
          console.log('Not Found');
        } else {
          console.log(err);
        }
      });

    localStorage.setItem(searchString, JSON.stringify(response));

    return response;
  }
}
