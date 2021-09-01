# Commands

Crafttweaker añade comandos que te ayudarán a crear tus archivos. Su objetivo es reducir el tiempo que estarás escribiendo uno.

El prefijo para los comandos son `crafttweaker` y `ct<code></p>

<p>También puedes usar <code>minetweaker` y `mt` 

Todos los comandos se pueden encontrar dentro del juego ejecutando:

`/crafttweaker help`

o

`/ct help`

# Lista de comandos

## Biomas

Usage:

`/crafttweaker biomes`

`/ct biomes`

Description:

Devuelve la lista de los biomas en el juego

## Tipos de biomas

Usage:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Description:

Devuelve la lista de los tipos de bioma en el juego

## Información de Bloques

Usage:

`/crafttweaker blockinfo`

`/ct blockinfo`

Description:

Activa y desactiva el lector de bloques En este modo, hacer clic derecho en un bloque te dira el nombre, la metadata y si existe información de TileEntity

## Bloques

Usage:

`/crafttweaker blocks`

`/ct blocks`

Description:

Devuelve una lista de todos los bloques en el juego

## Bugs

Usage:

`/crafttweaker bugs`

`/ct bugs
`

Description:

Abre la página de errores de Github en tu navegador

## Conflictos

Usage:

`/crafttweaker conflict`

`/ct conflict`

Description:

Devuelve una lista de recetas de la mesa de crafteo que estan conflictiendo.  
Esto solo funciona con JEI instalado.

## Discord 

Usage:

`/crafttweaker discord`

`/ct discord`

Description:

Abre tu navegador con un link al `servidor de Discord`, donde ofrecemos ayuda.

## Documentación

Usage:

`/crafttweaker docs`

`/ct docs`

Description:

Abre esta misma página en tu navegador. Lo mismo que `/ct wiki`.

## DumpZs

Usage:

`/crafttweaker dumpzs`

`/ct dumpzs
`

Description:

Devuelve un archivo HTML en tu directorio de minecraft, dentro de una carpeta llamada crafttweaker_dump, que contiene un dump ZenScript.  
Puedes usar uno o mas objetivos que seran ejecutados consecutivamente. Repetir el uso de un objetivo lo duplicará.  
Los objetivos se pueden encontrar usando el autocompletado (tabulador).  
Por defecto se incluyen: ` log, html y json` como objetivos.  
Esto incluirá todos los Parentesis especiales, ZenTipos, Funciones Global y ZenExpansiones, así como todos los paquetes registrados con sus métodos.  
No todos ellos se pueden usar desde los scripts, algunos son únicamente aplicables en Java.

## Entidades

Usage:

`/crafttweaker entities`

`/ct entities`

Description:

Devuelve una lista de las entidades en el juego

## Dar objeto

Usage:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Description:

Da al jugador el objeto usando la sintaxis de los Parentesis Especialies de Crafttweaker.  
También puedes aplicar tags usando `withTag()`.  
Este comando es muy simple y puede fallar.

## Hand

Usage:

`/crafttweaker hand`

`/ct hand`

Description:

Devuelve el nombre del objeto en tu mano. También lo añade en el chat.

Además, copia el nombra al portapapales y indica las entradas oredict.

## Inventario

Usage:

`/crafttweaker inventory`

`/ct inventory`

Description:

Devuelve una lista de objetos en tu inventario.

## CategoriasJEI

Usage:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Description:

Devuelve una lista de todas las categorias del mod JEI registradas. Requiere que el mod este instalado.

## JSON

Usage:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Description:

Añade al chat el NBT del objeto que tienes en la mano en formato JSON.  
Este formato es ligeramente diferente al IData de Crafttweaker.  
Si clicas en él, también se copiará a tu portapapeles.  
También puedes proveer el argumento `escaped` para automaticamente formatear el string final.

## Liquidos

Usage:

`/crafttweaker liquids`

`/ct liquids`

Description:

Devuelve una lista de los liquidos en el juego

## Log

Usage:

`/crafttweaker log`

`/ct log`

Description:

Envía un enlace clicable para abrir el crafttweaker.log.

## Mods

Usage:

`/crafttweaker mods`

`/ct mods`

Description:

Devuelve una lista de mods y sus versiones

## Names

Usage:

`/crafttweaker names [categoria]`

`/ct names [categoria]`

Description:

Devuelve una lista de todos los objetos en el juego.  
El argumento `categoria` es opcional y permite extender la lista con la siguiente información:

* burntime - tiempo de cocción
* creativetabs - pestañas de modo creativo
* damageable - es el objeto dañable
* display - aspecto
* enchantability
* foodvalue - valor de comida
* maxdamage - durabilidad maxima
* maxstack - tamaño máximo
* maxuse 
* modid - mod que lo añade
* rarity
* repairable - reparable
* repaircost - coste de reparación
* saturationvalue - valor de saturación
* unloc - nombre deslocalizado

También puedes ver todos los parámetros disponibles usando la función de autocompletado (tabulador).

## NBT

Usage:

`/crafttweaker nbt`

`/ct nbt`

Description:

Devuelve el NBT del bloque que estas mirando o el objeto que estas aguantado

## OreDict

Usage:

`/crafttweaker oredict [nombre]`

`/ct oredict [nombre]`

Description:

Devuelve una lista de todas las entradas OreDict en el juego

Si se provee un nombre, se devolverá la lista de objetos en esa entrada.

## Pociones

Usage:

`/crafttweaker potions`

`/ct potions`

Description:

Devuelve una lista de las pociones en el juego

## Nombres de receta

Usage:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Description:

Devuelve una lista de todos los nombres de las recetas en el juego. Un modid se puede proporcionar para filtrar resultados.

## Recipes

Usage:

`/crafttweaker recipes`

`/ct recipes`

Description:

Devuelve una lista de todas las recetas de crafteo en el juego en formato de un script.

## Recetas (Mano)

Usage:

`/crafttweaker recipes hand`

`/ct recipes hand`

Description:

Devuelve una lista de todas las recetas de crafteo en el juego para el objeto que tengas en la mano.

## Recipes (Horno)

Usage:

`/crafttweaker recipes furnace
`

`/ct recipes furnace`

Description:

Devuelve una lista de todas las recetas de horno en el juego

## Archivos

Usage:

`/crafttweaker scripts`

`/ct scripts`

Description:

Envía un enlace clicable para abrir el directorio de scripts.  
También se puede ejecutar desde una consola que en su lugar imprime la ruta absoluta al directorio del registro.

## Seeds

Usage:

`/crafttweaker seeds`

`/ct seeds`

Description:

Outputs a list of all the items in the seed registry to the crafttweaker.log file.

## Syntax

Usage:

`/crafttweaker syntax`

`/ct syntax`

Description:

Reads through all your scripts and will output all errors it finds in your syntaxes. Note that this won't apply your script changes, you need to restart your game to see them in effect.

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

Description:

Opens your browser to this wiki page (same as `/ct docs`).

## ZsLint

Usage:

`/crafttweaker zslint`

`/ct zslint`

Description:

Starts the zslint socket.