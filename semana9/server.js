Panel lateral
modulo_04
Actividades Semana 9
Tarea Semana 9

Tarea Semana 9
Requisitos de finalización
Cierre: domingo, 5 de julio de 2026, 23:59
Semana 9
Guía de ejercicios y aplicación práctica
Servidores · Node.js · Express · Puertos · Logs · Estabilidad

Objetivo de la semana
Comprender cómo funciona un servidor para aplicaciones Node.js, conocer los componentes básicos de un entorno servidor, aprender a ejecutar servicios de forma controlada y aplicar medidas básicas de seguridad y estabilidad para que una plataforma digital pueda funcionar de manera continua.

Entrega final
Al finalizar la actividad debes publicar la carpeta semana9 en tu repositorio de GitHub y compartir el enlace del repositorio en Moodle.

Instrucciones generales
Responde las preguntas de selección múltiple.
Realiza los ejercicios prácticos relacionados con servidores y Node.js.
Guarda las respuestas en los archivos indicados.
Publica la carpeta semana9 en tu repositorio.
Comparte el enlace del repositorio en Moodle.
Pista para realizar la actividad
Puedes desarrollar esta actividad de dos formas:

Opción 1: Usar GitHub Codespaces
Esta es la opción recomendada si no tienes Node.js instalado en tu computador. Para que GitHub habilite Codespaces fácilmente, crea un repositorio en blanco, marca la opción Add a README file y luego abre ese repositorio en Codespaces.

Desde Codespaces tendrás una terminal lista para trabajar con Node.js, crear la carpeta semana9, instalar Express, ejecutar el servidor, probar las rutas y subir los cambios a GitHub.

Opción 2: Trabajar en tu computador local
También puedes realizar la actividad en tu computador si tienes instalado Node.js, npm, Git y un editor como Visual Studio Code. En este caso, primero debes hacer fork del repositorio del docente, copiar la URL HTTPS de tu propio fork, clonar tu fork, crear la carpeta semana9, realizar la práctica, probar el servidor en http://localhost:3000 y luego subir los cambios a GitHub.

En cualquiera de las dos opciones, el resultado final debe ser el mismo: tu repositorio debe contener la carpeta semana9 con todos los archivos solicitados.

Comandos iniciales según tu entorno
Si trabajas en GitHub Codespaces
Crea un repositorio nuevo en GitHub, selecciona la opción Add a README file y luego abre el repositorio en Codespaces. Después ejecuta:

mkdir semana9
cd semana9
npm init -y
npm install express
touch server.js
touch preguntas-semana9.txt
touch ejecucion-servidor.txt
touch componentes-servidor.txt
touch reflexion-semana9.txt
Si trabajas en tu computador local
Primero realiza el flujo correcto de GitHub:

Haz fork del repositorio original del docente.
Copia la URL HTTPS de tu propio fork.
Clona tu fork en tu computador.
Crea la carpeta semana9.
Trabaja, guarda, haz commit y push.
git clone URL_DE_TU_FORK
cd NOMBRE_DE_TU_REPOSITORIO
mkdir semana9
cd semana9
npm init -y
npm install express
touch server.js
touch preguntas-semana9.txt
touch ejecucion-servidor.txt
touch componentes-servidor.txt
touch reflexion-semana9.txt
Luego podrás ejecutar el servidor con:

node server.js
Y probar las rutas en:

http://localhost:3000
http://localhost:3000/estado
Preguntas de selección múltiple
Crea el archivo preguntas-semana9.txt y guarda allí tus respuestas.

touch preguntas-semana9.txt
Pregunta 1
¿Qué es un servidor en una aplicación web?

A. Un computador que solo guarda archivos

B. Un sistema que ejecuta aplicaciones y responde solicitudes de los usuarios

C. Un navegador de internet

D. Un archivo del sistema

Pregunta 2
¿Qué significa que un servidor escuche en un puerto?

A. Que el servidor está conectado a un cable

B. Que el servidor está esperando solicitudes en una dirección específica

C. Que el servidor está apagado

D. Que el servidor guarda información

Pregunta 3
¿Cuál de los siguientes elementos es importante para la estabilidad de un servidor?

A. No revisar el sistema

B. Monitorear ejecución y registrar errores

C. Compartir todas las credenciales

D. Eliminar registros del sistema

Pregunta 4
¿Qué son los logs en un servidor?

A. Archivos que registran la actividad y eventos del sistema

B. Programas para instalar software

C. Archivos de imágenes

D. Un navegador web

Formato sugerido para preguntas-semana9.txt
Pregunta 1:
Respuesta:

Pregunta 2:
Respuesta:

Pregunta 3:
Respuesta:

Pregunta 4:
Respuesta:
Actividad práctica
Pregunta 5 — Crear carpeta de la semana
Dentro de tu proyecto crea la carpeta:

mkdir semana9
cd semana9
Pregunta 6 — Crear un servidor Node.js para pruebas
Crea el archivo:

touch server.js
Escribe el siguiente código en server.js:

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
