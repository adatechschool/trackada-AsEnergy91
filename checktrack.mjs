// import {readFileSync, existsSync} from "fs";
// import { homedir } from "os";
// import {join} from "path";

// const track = JSON.parse(readFileSync("./track.json"));
// const root = track.root.replace("~", homedir() + '/Documents/GitHub/');

// for (const {name, required} of track.projects) {
//     const projectExists = existsSync(join(root, name));
//     console.log(projectExists ? "✅" : "❌", join(root, name), required.length);
// }

// importer des outils pour lire les fichiers et vérifier s'ils existent
import {readFileSync, existsSync} from "fs";

// outil pour construire des chemins de dossier
import {join} from "path";

// outil pour récupérer le dossier personnel de l'utilisateur
import {homedir} from "os";

// lire le fichier track.json et le transformer en objet JavaScript
const track = JSON.parse(readFileSync("./track.json"));

// remplacer ~ par le vrai dossier utilisateur
const root = track.root.replace("~", homedir() + '/Documents/GitHub/');
const checkdirAda = join(root, "ada");

// parcourir tous les projets du fichier JSON
for (const {name, required} of track.projects) {

    // vérifier si le dossier du projet existe
    const projectExists = existsSync(path);

    // afficher :
    // ✅ si le dossier existe
    // ❌ sinon
    // le chemin du projet
    // le nombre de fichiers requis
    console.log(projectExists ? "✅" : "❌", join(root, name), required.length);
}

if (checkdirAda) {
    console.log("Le dossier Ada existe");
} else {
    console.log("Le dossier Ada n'existe pas");
}