# MODULO 3 - Node.js - Trabajo Práctico N° 1

## Descripción

Este proyecto corresponde al Trabajo Práctico 01 de Node.js y tiene como objetivo poner en práctica conceptos básicos del entorno de ejecución de Node.js, el manejo de archivos y directorios, y el funcionamiento del Event Loop.

El proyecto está compuesto por dos programas:

index.js: crea y muestra en consola una ficha de un videojuego y, además, genera un archivo de texto con esa información.
orden-event-loop.js: permite observar de manera sencilla el orden en que se ejecutan las instrucciones y una tarea programada mediante setTimeout().

El videojuego utilizado como ejemplo es PUBG Battlegrounds.


## Instrucciones de Ejecución

Requisito: tener instalado Node.js en el equipo.
Para comprobar la instalación: node --version

- Para index.js
Desde la consola o terminal ejecutar: "node index.js"

También se puede indicar un nombre como argumento: "node index.js Marcos"

En ese caso, el programa mostrará un mensaje de bienvenida utilizando el nombre indicado.

El programa también mostrará:

La versión de Node.js utilizada.
La plataforma sobre la que se está ejecutando.
La ficha completa del videojuego.
La ubicación del archivo generado.

- Para orden-event-loop.js
Desde la consola o terminal ejecutar: "node orden-event-loop.js"

La salida esperada será:

Inicio de ejecución del programa
Se ejecuta la tarea programada
Fin de la ejecución del programa

Esto permite observar que el callback de setTimeout(..., 0) no se ejecuta inmediatamente, sino después de que finaliza el código principal que se encuentra en ejecución.


## Archivo generado

Al ejecutar "node index.js", el programa crea automáticamente la carpeta:
salida/

y dentro de ella genera el archivo:
salida/ficha-videojuego.txt

El archivo contiene la información de la ficha del videojuego:

FICHA DEL VIDEOJUEGO
=========================
Título: PUBG Battlegrounds
Desarrollador: PUBG Studios (KRAFTON, Inc.)
Fecha de Lanzamiento: 2017
Géneros: Battle Royale, Supervivencia, Shooter
Plataformas: PC, PlayStation, Xbox, iOS, Andriod
Multijugador: Sí

La carpeta de salida se crea utilizando node:path para construir las rutas y node:fs para crear el directorio y escribir el archivo.


## Conceptos

1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

    - JavaScript es un lenguaje de programación utilizado para el desarrollo de páginas web y aplicaciones. Para ejecutar un programa escrito con JavaScript se puede hacer desde 2 entornos: el navegador web o Node.js (existen otros entonos como por ej. Deno, Bun, etc.).

    - V8 es el motor que ejecuta las instrucciones efectuadas por JavaScript y transforma el código en instrucciones que la computadora entiende de manera directa.

    - Node.js es un entorno de ejecución (runtime) que permite ejecutar JavaScript fuera del navegador. Este entorno también agrega funcionalidades propias, como módulos y/o librerías para trabajar con archivos, rutas, procesos, red y otras operaciones del sistema.

2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?
    
    Esto sucede porque el setTimeOut(), aunque esté seteado en 0 milisegundos, el callback queda programado para ejecutarse posteriormente, por lo tanto, Node.js primero continúa ejecutando el código que se encuentra en el hilo de ejecución.

    Entonces, primero se ejecutan los dos console.log() que forman parte del código principal y luego, cuando corresponde dentro del Event Loop, se ejecuta el callback de setTimeout().

    Por lo tanto el resultado del hilo de ejecución es:

    1) Inicio de ejecución del programa
    2) Se ejecuta la tarea programada
    3) Fin de la ejecución del programa

3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

    I/O significa Input/Output (Entrada/Salida)
    
    - Una operación bloqueante hace que la ejecución tenga que esperar a que esa operación termine antes de continuar con las siguientes instrucciones.

    - Una operación no bloqueante permite iniciar la operación y continuar con otras tareas mientras se espera su resultado. Cuando la operación termina, Node.js puede procesar el resultado mediante callbacks o promesas. Este modelo permite que Node.js pueda gestionar múltiples operaciones de entradas y salidas sin tener que detener toda la ejecución mientras espera cada una de ellas.

4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js ?

    - node:path se utiliza para trabajar y construir rutas de archivos y directorios de forma adecuada.

    En este proyecto se utiliza:

        * const carpetaSalida = path.join(__dirname, "salida");
        * const archivoSalida = path.join(carpetaSalida, "ficha-videojuego.txt");

    De esta manera se construyen las rutas de la carpeta y del archivo de salida.

    - node:fs permite trabajar con el sistema de archivos.

    En este proyecto se utiliza:

        * fs.mkdirSync(carpetaSalida, { recursive: true });
        * fs.writeFileSync(archivoSalida, fichaVideojuego, "utf8");C.

    De esta manera se crea la carpeta salida y luego se crea y escribe el archivo ficha-videojuego.txt

    En resumen:
    node:path --> construye y manipula rutas
    node:fs   --> crea, lee, escribe y administra archivos y directorios


## Estructura del Proyecto
```text
TP1/ 
├── salida/ 
│   └── ficha-videojuego.txt 
├── .gitignore
├── index.js
├── orden-event-loop.js
└── README.md
```
