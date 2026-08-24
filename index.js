//Aquí importo los módulos nativos de Node.js para trabajar con rutas y archivos
const fs = require("node:fs");
const path = require("node:path");

//Aquí muestro el mensaje de bienvenida al usuario. Nombre por defecto: Estudiante.
const nombre = process.argv[2] ?? "Estudiante";
console.log(`Bienvenido, ${nombre}`);

//Aquí muestro la versión de Node.js y la Plataforma en donde se ejecuta el código
console.log("Versión de Node.js:", process.version);
console.log("Trabajando desde la Plataforma:", process.platform);

//Aquí creo el objeto con los datos de la ficha del Videojuego
const videojuego = {
    titulo: "PUBG Battlegrounds",
    desarrollador: "PUBG Studios (KRAFTON, Inc.)",
    fechaLanzamiento: 2017,
    generos: ["Battle Royale, Supervivencia, Shooter"],
    plataformas: ["PC, PlayStation, Xbox, iOS, Andriod"],
    multijugador: true,
};

//Aquí transformo los datos del objeto a texto para que sean legibles
const generosComoTexto = videojuego.generos.join(", ");
const plataformasComoTexto = videojuego.plataformas.join(", ");

//Aquí el operador ternario muestra si el videojuego es multijugador o no
const caracteristica = videojuego.multijugador ? "Sí" : "No";

//Aquí construyo la Ficha del videojuego con los datos del objeto y los datos tranformados a texto
const fichaVideojuego = `
FICHA DEL VIDEOJUEGO
=========================
Título: ${videojuego.titulo}
Desarrollador: ${videojuego.desarrollador}
Fecha de Lanzamiento: ${videojuego.fechaLanzamiento}
Géneros: ${generosComoTexto}
Plataformas: ${plataformasComoTexto}
Multijugador: ${caracteristica}
`;

//Aquí construyo las rutas de la carpeta de salida y el archivo donde se gurdará la ficha del videojuego
const carpetaSalida = path.join(__dirname, "salida");
const archivoSalida = path.join(carpetaSalida, "ficha-videojuego.txt");

//Aquí creo la carpeta de salida
fs.mkdirSync(carpetaSalida, { recursive: true });

//Aquí creo el archivo de salida que contiene la ficha del videojuego en formato de texto plano
fs.writeFileSync(archivoSalida, fichaVideojuego, "utf8");

//Aquí imprimo en consola la ficha del videojuego y el mensaje de connfirmación de que se ha guardado en el archivo de salida
console.log(fichaVideojuego);
console.log(`La ficha del Videojuego se ha guardado en el archivo: ${archivoSalida}`);