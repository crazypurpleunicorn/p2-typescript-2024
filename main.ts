import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadLaunches } from "./launches.js";

const launches = await loadLaunches();
console.log(launches)
const html = render(launches);
await writeFile('users.html', html);

