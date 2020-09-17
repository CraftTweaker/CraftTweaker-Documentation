# Comandos

CraftTweaker añade comandos que le ayudarán con la creación de scripts, se proporcionan para ayudar a reducir el tiempo de desarrollo de la escritura de scripts.

The prefix for commands are: `/crafttweaker` or `/ct`

You can also use one of these aliases: `/minetweaker` or `/mt`

Todos los comandos pueden ser encontrados en el nombre haciendo:

`/crafttweaker help`

o

`/ct ayuda`

# Lista de comandos

## Biomas

Uso:

`/crafttweaker biomes`

`/ct biomas`

Descripción:

Lista todos los biomas que están en el juego.

## Tipos de biomas

Uso:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Descripción:

Lista todos los biomeTypes que están en el juego.

## BlockInfo

Uso:

`/crafttweaker blockinfo`

`Bloque /ct`

Descripción:

Activa o desactiva el lector de bloques. En el modo de información de bloques, hacer clic derecho en un bloque le dirá su nombre, metadatos y datos de Tile Entity si es aplicable.

## Bloques

Uso:

`/crafttweaker bloques`

`/ct bloques`

Descripción:

Sale una lista de todos los bloques del juego al archivo crafttweaker.log.

## Bugs

Uso:

`/crafttweaker bugs`

`/ct bugs`

Descripción:

Abre tu navegador con el gestor de errores de GitHub.

## Conflicto

Uso:

`/crafttweaker conflict`

`/ct conflicto`

Descripción:

Sale una lista de todas las recetas de la tabla de fabricación en conflicto al archivo crafttweaker.log.  
¡Ten en cuenta que esto solo funciona en un CLIENTE con JEI instalado!

## Discordia

Uso:

`/crafttweaker discord`

`/ct discord`

Descripción:

Abre tu navegador con un enlace a [el servidor de Discord](https://www.discord.blamejared.com).

## Documentos

Uso:

`/crafttweaker docs`

`/ct docs`

Descripción:

Abre tu navegador a esta página de documentos (al igual que `/ct wiki`).

## DumpZ

Uso:

`/crafttweaker dumpzs`

`/ct volcados`

Descripción:

Sale un volcado ZenScript a una carpeta crafttweaker_dump dentro de su directorio minecraft como archivo HTML.  
Puedes usar uno o más objetivos que serán ejecutados consecutivamente (si proporcionas un objetivo dos veces se ejecutará dos veces).  
Los objetivos se pueden encontrar usando autocompletar (tabulador).  
Por defecto `log`, `html` y `json` están registrados como objetivos.  
Esto incluirá todos los Manejadores de Bracket registrados, ZenTypes, Funciones Globales, ZenExpansions y todos los Paquetes Registrados, incluyendo sus métodos.  
¡Ten en cuenta que no todos pueden ser usados desde dentro de los scripts!

## Entidades

Uso:

`/crafttweaker entidades`

`/ct entidades`

Descripción:

Sale una lista de todas las entidades del juego al archivo crafttweaker.log.

## Dar Objeto

Uso:

`/crafttweaker give <minecraft:bedrock>`

`/ct da <minecraft:bedrock>`

Descripción:

Da al jugador el objeto usando la sintaxis de manejador de Bracket de CrT.  
También puede aplicar etiquetas añadiendo una `. ithTag()` llamada.  
Tenga en cuenta que este es un analizador bastante simple y puede no funcionar en cada caso!

## Mano

Uso:

`/crafttweaker hand`

`/ct mano`

Descripción:

Imprime el nombre del objeto en tu mano en el chat.

También copia el nombre al portapapeles e imprime entradas oredicto.

## Inventario

Uso:

`/crafttweaker inventario`

`/ct inventario`

Descripción:

Sale una lista de todos los elementos de tu inventario al archivo crafttweaker.log.

## JeiCategories

Uso:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Descripción:

¡Sale una lista de todas las categorías de jei registradas al archivo crafttweaker.log.  
Requiere que JEI esté instalado (sorpresa)!

## Json

Uso:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Descripción:

Prints the nbt of the item in your hand as JSON to the chat.  
This format differs from the IData formatting CraftTweaker uses.  
You can click it to be copied to your clipboard.  
You can also privide the `escaped` argumetn to automatically escape the resulting string.

## Liquidos

Uso:

`/crafttweaker liquids`

`/ct líquidos`

Descripción:

Sale una lista de todos los líquidos del juego al archivo crafttweaker.log.

## Logo

Uso:

`/crafttweaker log`

`/ct log`

Descripción:

Envía un enlace clicable para abrir el crafttweaker.log.

## Modos

Uso:

`/crafttweaker mods`

`/ct mods`

Descripción:

Envía una lista de todos los mods y sus versiones en el juego al archivo crafttweaker.log e imprime en el chat.

## Nombres

Uso:

`/crafttweaker names [category]`

`Nombres /ct [category]`

Descripción:

Sale una lista de todos los elementos del juego al archivo crafttweaker.log.  
El argumento de la categoría `` es opcional y extenderá la lista con la información correspondiente:

* tiempo quemado
* creativos
* dañable
* pantalla
* encantabilidad
* foodvalue
* maxdamage
* maxstack
* maxuse
* modificar
* rareza
* reparable
* reparación
* valor de saturación
* desbloquea

También puede ver todos los parámetros disponibles usando la función de autocompletado de TAB-Key.

## Nbt

Uso:

`/crafttweaker nbt`

`/ct Textt`

Descripción:

Sale el NBT del bloque en el que estás mirando o el objeto que tienes en el archivo crafttweaker.log.

## OreDict

Uso:

`/crafttweaker oredict <name>`

`/ct oredicto <name>`

Descripción:

Sale una lista de todas las entradas de OreDict en el juego al archivo crafttweaker.log.

Si un nombre es proporcionado, los nombres de todos los artículos registrados en el oredicto serán enviados al archivo crafttweaker.log.

## Pociones

Uso:

`/crafttweaker potions`

`Pociones /ct`

Descripción:

Sale una lista de todas las pociones en el juego al archivo crafttweaker.log.

## Nombres de receta

Uso:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Descripción:

Envía una lista de todos los nombres de las recetas en el juego al archivo crafttweaker.log.  
Se puede proporcionar un modificador para filtrar los resultados.

## Recetas

Uso:

`/crafttweaker recetas`

`recetas /ct`

Descripción:

Sale una lista de todas las recetas de fabricación en el juego al archivo crafttweaker.log.

## Recetas (Mano)

Uso:

`/crafttweaker mano`

`mano de recetas /ct`

Descripción:

Sale una lista de todas las recetas de fabricación del objeto en la mano del jugador en el juego al archivo crafttweaker.log.

## Recetas (Furnace)

Uso:

`/crafttweaker recetas horno`

`/ct recetas horno`

Descripción:

Sale una lista de todas las recetas de horno del juego al archivo crafttweaker.log.

## Escrituras

Uso:

`/crafttweaker scripts`

`/ct scripts`

Descripción:

Envía un enlace clicable para abrir el directorio de scripts.  
También se puede ejecutar desde una línea de comandos que en su lugar imprime la ruta absoluta al directorio del registro.

## Semillas

Uso:

`/crafttweaker semillas`

`semillas /ct`

Descripción:

Sale una lista de todos los elementos en el registro de semillas al archivo crafttweaker.log.

## Síntesis

Uso:

`/crafttweaker syntax`

`Sintaxis /ct`

Descripción:

Lee a través de todos tus scripts y mostrará todos los errores que encuentra en tus sintaxis. Tenga en cuenta que esto no aplicará los cambios de script, necesita reiniciar el juego para verlos en efecto.

## Wiki

Uso:

`/crafttweaker wiki`

`/ct wiki`

Descripción:

Abre tu navegador a esta página wiki (al igual que `/ct docs`).

## ZsLint

Uso:

`/crafttweaker zslint`

`/ct zslint`

Descripción:

Inicia el socket zslint.