import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadLaunches } from "./launches.js";

const launches = await loadLaunches();
const html = render(launches);
await writeFile('lauches.html', html);

