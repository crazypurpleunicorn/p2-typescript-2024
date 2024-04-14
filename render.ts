import { spacexLaunch } from "./launches.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="./styles.css">
</head>`;

const renderLaunches = (launches: Array<spacexLaunch>) => {
  let html = "";
  //add header
  html += `
  <header>
    <div class="svglogocontainer">
    <img src="data:image/png;base64,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" alt="Real Star link logo" class="svglogo">
  </header>`;
  //add nav bar
  html += `
  <nav class="sticky">
        <div class="center maxwidth1050">
            <ul>
                <li>
                    <a href="#">Passed launches</a>
                </li>
                >
            </ul>
        </div>
    </nav>`
  for (const launch of launches) {
    if (launch.success) {
      //set success-true or success-false clase as a function of the launch's succes
      html += `
      <div class="launch">
      <img src="${launch.picture.small}" />
      <div class="data">
        <div class="name">${launch.name}</div>
        <div class="name success-true">Mission status: <span>Success</span></div>
        <div class="email">Mission flightnumber: ${launch.flightNumber}</div>
        <div class="date">${launch.dateUtc}</div>
      </div>
    </div>`;
    } else {
      html += `<div class="launch">
      <img src="${launch.picture.small}" />
      <div class="data">
        <div class="name">${launch.name}</div>
        <div class="name success-false">Mission status: <span>Failure</span></div>
        <div class="email">Mission flightnumber: ${launch.flightNumber}</div>
        <div class="date">${launch.dateUtc}</div>
      </div>
    </div>`;
    }
  }
  return html;
};

export const render = (launches: Array<spacexLaunch>) => {
  return `
<html>
  ${head("Launches List")}
  <body>
    ${renderLaunches(launches)}
  </body>
</html>`;
};
