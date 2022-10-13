# Commands

Crafttweaker añade comandos que te ayudarán a crear tus archivos. Su objetivo es reducir el tiempo que estarás escribiendo uno.

El prefijo para los comandos son `crafttweaker` y `ct<code></p>

<p spaces-before="0">También puedes usar <code>minetweaker` y `mt`

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

Outputs a list of all conflicting crafting table recipes to the crafttweaker.log file.  
Note that this only works on a CLIENT with JEI installed!

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

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
You can use one or more dump targets that will be executed consecutively (if you provide a target twice it will run twice).  
The targets can be found using auto-complete (tab key).  
By default `log`, `html` and `json` are registered as targets.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!


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

Gives the player the item using CrT's Bracket handler syntax.  
You can also apply tags by appending a `.withTag()` call.  
Note that this is a pretty simple parser and may not work for every case!


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

Outputs a list of all registered jei categories to the crafttweaker.log file.  
Requires JEI to be installed (surprise)!


## JSON

Usage:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Description:

Prints the nbt of the item in your hand as JSON to the chat.  
This format differs from the IData formatting CraftTweaker uses.  
You can click it to be copied to your clipboard.  
You can also privide the `escaped` argumetn to automatically escape the resulting string.

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

Outputs a list of all the items in the game to the crafttweaker.log file.  
The `category` argument is optional and will extend the list with the according information:

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

Outputs a list of all recipe names in the game to the crafttweaker.log file.  
A modid can be provided to filter results.

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

Sends a clickable link to open the scripts directory.  
Can also be executed from a command line which instead prints the absolute path to the directory to the log.


## Seeds

Usage:

`/crafttweaker seeds
`

`/ct seeds`

Description:

Devuelve una lista de todos las semillas registradas en el juego

## Syntax

Usage:

`/crafttweaker syntax`

`/ct syntax`

Description:

Lee a través de todos tus scripts y mostrará todos los errores que encuentra en tus sintaxis.</br> Esto te avisa de cosas como paréntesis, puntos y comas, objetos que no existan pero fallará con cosas de ejecución (eventos, funcionalidad avanzada de contenttweaker, y funciones personalizadas). Esto no aplica tus cambios, deberás reiniciar el juego para verlos en efecto.

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

Description:

Abre esta misma página en tu navegador. Lo mismo que `/ct docs`.

## ZsLint

Usage:

`/crafttweaker zslint`

`/ct zslint`

Description:

Starts the zslint socket.