import {existsSync} from "fs";
import {join} from "path";
import {homedir} from "os";

const root = homedir(); // root = "/users/starb"

const folders = ["Documents", "Downloads", "Desktop"];

for (const folder of folders)//Pour chaque élement de folders, faire les actions suivantes
 {

    const path = join(root, folder);

    const exists = existsSync(path);

    console.log(exists ? "✅" : "❌", path);
}