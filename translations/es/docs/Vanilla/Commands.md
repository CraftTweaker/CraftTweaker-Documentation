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

Outputs a list of all the mods and their versions in the game to the crafttweaker.log file and prints it in chat.

## Names

Usage:

`/crafttweaker names [category]`

`/ct names [category]`

Description:

Outputs a list of all the items in the game to the crafttweaker.log file.  
The `category` argument is optional and will extend the list with the according information:

* burntime
* creativetabs
* damageable
* display
* enchantability
* foodvalue
* maxdamage
* maxstack
* maxuse
* modid
* rarity
* repairable
* repaircost
* saturationvalue
* unloc

You can also see all the available parameters using the TAB-Key autocompletion feature.

## Nbt

Usage:

`/crafttweaker nbt`

`/ct nbt`

Description:

Outputs the NBT of the block you are looking at or the item you are holding to the crafttweaker.log file.

## OreDict

Usage:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Description:

Outputs a list of all the OreDict entries in the game to the crafttweaker.log file.

If a name is supplied, the names of all the items registered to the oredict will be outputted to the crafttweaker.log file.

## Potions

Usage:

`/crafttweaker potions`

`/ct potions`

Description:

Outputs a list of all the potions in the game to the crafttweaker.log file.

## RecipeNames

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

Outputs a list of all the crafting recipes in the game to the crafttweaker.log file.

## Recipes (Hand)

Usage:

`/crafttweaker recipes hand`

`/ct recipes hand`

Description:

Outputs a list of all the crafting recipes for the item in the player's hand in the game to the crafttweaker.log file.

## Recipes (Furnace)

Usage:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

Description:

Outputs a list of all the furnace recipes in the game to the crafttweaker.log file.

## Archivos

Usage:

`/crafttweaker scripts`

`/ct scripts`

Description:

Sends a clickable link to open the scripts directory.  
Can also be executed from a command line which instead prints the absolute path to the directory to the log.

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