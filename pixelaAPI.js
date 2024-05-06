PIXELA_ENDPOINT_URL = "https://pixe.la/v1/users/guen/graphs/graph2";

headers = { "Content-type": "application/json; charset=UTF-8", "X-USER-TOKEN": "javaandpython3010" };

// https://pixe.la/v1/users/guen/graphs/graph2
async function postPixel(newData) {
  console.log(newData);
  const response = await fetch(PIXELA_ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: headers,
  });
  const result = await response.json();
  console.log(response);
  console.log(result);
  showGraphs();
}

// https://pixe.la/v1/users/guen/graphs/graph2/20240503
async function getPixel(pixelDate) {
  console.log(`${PIXELA_ENDPOINT_URL}/${pixelDate}`);

  const response = await fetch(`${PIXELA_ENDPOINT_URL}/${pixelDate}`, {
    method: "GET",
    headers: headers,
  });
  const body = await response.json();
  console.log(response);
  console.log(body);
  return body;
}

// https://pixe.la/v1/users/guen/graphs/graph2/20240503 + newData
async function updatePixelofDate(pixelDate, newData) {
  console.log(`${PIXELA_ENDPOINT_URL}/${pixelDate}`);
  console.log(pixelDate, newData);

  const response = await fetch(`${PIXELA_ENDPOINT_URL}/${pixelDate}`, {
    method: "PUT",
    body: JSON.stringify(newData),
    headers: headers,
  });
  const body = await response.json();
  console.log(response);
  console.log(body);
  showGraphs();
}

// https://pixe.la/v1/users/guen/graphs/graph2/20240503
async function deleteOnePixel(pixelDate) {
  console.log(`${PIXELA_ENDPOINT_URL}/${pixelDate}`);

  const response = await fetch(`${PIXELA_ENDPOINT_URL}/${pixelDate}`, {
    method: "DELETE",
    headers: headers,
  });
  const body = await response.json();
  console.log(response);
  console.log(body);
  showGraphs();
}
