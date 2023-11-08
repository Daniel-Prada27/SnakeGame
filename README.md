# SnakeGame

## Cómo abrir la página
Debido a que el código de javascript está en módulos, es necesario usar alguna extensión como [Live Server](https://github.com/ritwickdey/vscode-live-server) o similares.

## Estructura del proyecto
El proyecto cuenta con cuatro páginas.
- Login
- Página de juego
- Página de Puntuaciones
- Página de perfil de jugador

El login por ahora no es funcional, por lo que es posible simplemente dar click al botón de Login para acceder a la página de juego.

Es posible navegar a cualquier página desde cualquier página, a excepción del login. Desde el login Sólo es posible entrar a la página de juego, y para regresar al login es necesario cerrar sesión desde la página de perfil.

# Funcionamiento del proyecto

## Login
El login es un formulario bastante simple, por ahora, al no ser funcional, opera con el método GET para poder 'enviarlo' sin ningún recipiente válido.

Es importante tener en cuenta que el formulario no usará el método GET al momento de implementar un login funcional, pues esto expondría los datos. Se usa únicamente de forma provisional.

## Navegación
En todas las páginas a excepción del login, se tiene una barra de navegación en la parte superior.

La barra de navegación tiene nombres muy descriptivos, al dar click sobre ellos, se redirigirá a la página respectiva.

En la parte derecha de la barra, se encuentra un ícono de cuenta, al dar click en él, se redirigirá a la página de perfil de jugador.

## Juego
El tablero es un div con display de tipo grid para lograr las divisiones, se mantienen 21 divisiones uniformes tanto para filas como para columnas.

Cada elemento del juego es un div creado en javascript y añadido al tablero.

Para el movimiento de la serpiente, se añadió un eventListener al elemento Window para que detecte cuando el jugador presiona las teclas Arriba, Abajo, Derecha e Izquierda.

Se cuenta también con un botón para activar los obstáculos, si se presiona, aparecerán cuadros azules en el tablero, los cuales harán que el juego se acabe si el jugador se estrella cone ellos.

Por último, se tiene un marcador de puntuación, este funciona para que el jugador pueda ver la puntuación de su juego actual, y servirá más adelante para registrar en una base de datos las puntuaciones más altas entre todos los jugadores.

## Integrantes

- Daniel Prada - 2221891
- Yovani Tarazona - 2221881