import {spacexLaunch} from "./launches.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .launch {
      font-family: sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    .launch img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .launch .name {
      font-weight: bold;
    }
    .launch .email {
      font-family: monospace;
    }
  </style>
</head>`;

const renderLaunches = (launches: Array<spacexLaunch>) => {
  let html = "";
  for (const launch of launches) {
    html += `<div class="launch">
      <img src="${launch.picture.small}" />
      <div class="data">
        <div class="name">${launch.name}</div>
        <div class="email">${launch.flightNumber}</div>
      </div>
    </div>`;
  }
  return html;
}

export const render = (launches: Array<spacexLaunch>) => {
  return `
<html>
  ${head("Launches List")}
  <body>
    ${renderLaunches(launches)}
  </body>
</html>`;
};
