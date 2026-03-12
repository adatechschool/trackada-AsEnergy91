import {readFileSync, existsSync} from "fs";
import { homedir } from "os";
import {join} from "path";

const track = JSON.parse(readFileSync("./track.json"));
const root = track.root.replace("~", homedir() + '/Documents/GitHub/');
const dirAdaExists = existsSync(join(homedir(), "ada"));



if (dirAdaExists) {
    console.log("✅ dossier ada");
} else {
    console.log("❌ Le dossier ada n'existe pas");
}

for (const {name, required} of track.projects) {
    const projectPath = join(root, name);
    const projectExists = existsSync(join(root, name));
    const gitExists = existsSync(join(projectPath, ".git"));
    const missingFiles = required.filter(file => !existsSync(join(projectPath, file)));

    if (!projectExists) {
        console.log(`❌ dossier du projet ${name}`);
        console.log("- le dossier n'existe pas ou n'est pas nommé correctement\n");
    } else {


        if (gitExists && missingFiles.length === 0) {
            console.log(`✅ dossier du projet ${name}\n`);
        } else {

            console.log(`❌ dossier du projet ${name}`);

            if (!gitExists) {
                console.log("- le repository git n'est pas initialisé");
            }

            if (missingFiles.length > 0) {
                console.log(`- les fichiers suivants sont manquants : ${missingFiles.join(", ")}`);
            }

            console.log();
        }
    }
}
        // console.log(
        //     projectExists ?  `✅ dossier du projet ${name}\n` : `❌ dossier du projet ${name}\n\n- le dossier n'existe pas ou n'est pas nommé correctement \n`,
        //     gitExists ? "":"- le repository git n'est pas initialisé\n",
        //   