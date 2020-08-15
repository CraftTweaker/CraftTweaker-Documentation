# Comandos

CraftTweaker adds commands that will help you with the creation of scripts, they are provided to help reduce the development time of writing scripts.

The prefix for commands are: `/crafttweaker` or `/ct`

You can also use one of these aliases: `/minetweaker` or `/mt`

All the commands can be found ingame by doing:

`/crafttweaker help`

or

`/ct help`

# List of commands

## Biomes

Uso:

`/crafttweaker biomes`

`/ct biomes`

Descripción:

Lists all of the biomes that are in the game.

## BiomeTypes

Uso:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Descripción:

Lists all of the biomeTypes that are in the game.

## BlockInfo

Uso:

`/crafttweaker blockinfo`

`/ct blockinfo`

Descripción:

Activates or deactivates the block reader. In block info mode, right-clicking a block will tell you it's name, metadata and Tile Entity data if applicable.

## Blocks

Uso:

`/crafttweaker blocks`

`/ct blocks`

Descripción:

Outputs a list of all the blocks in the game to the crafttweaker.log file.

## Bugs

Uso:

`/crafttweaker bugs`

`/ct bugs`

Descripción:

Opens your browser with the GitHub bug tracker.

## Conflict

Uso:

`/crafttweaker conflict`

`/ct conflict`

Descripción:

Outputs a list of all conflicting crafting table recipes to the crafttweaker.log file.  
Note that this only works on a CLIENT with JEI installed!

## Discord

Uso:

`/crafttweaker discord`

`/ct discord`

Descripción:

Opens your browser with a link to [the Discord server](https://www.discord.blamejared.com).

## Docs

Uso:

`/crafttweaker docs`

`/ct docs`

Descripción:

Opens your browser to this docs page (same as `/ct wiki`).

## DumpZs

Uso:

`/crafttweaker dumpzs`

`/ct dumpzs`

Descripción:

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
You can use one or more dump targets that will be executed consecutively (if you provide a target twice it will run twice).  
The targets can be found using auto-complete (tab key).  
By default `log`, `html` and `json` are registered as targets.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!

## Entities

Uso:

`/crafttweaker entities`

`/ct entities`

Descripción:

Outputs a list of all the entities in the game to the crafttweaker.log file.

## Give Item

Uso:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Descripción:

Gives the player the item using CrT's Bracket handler syntax.  
You can also apply tags by appending a `.withTag()` call.  
Note that this is a pretty simple parser and may not work for every case!

## Mano

Uso:

`/crafttweaker hand`

`/ct hand`

Descripción:

Prints the name of the item in your hand to the chat.

Also copies the name to clipboard and prints oredict entries.

## Inventory

Uso:

`/crafttweaker inventory`

`/ct inventory`

Descripción:

Outputs a list of all the items in your inventory to the crafttweaker.log file.

## JeiCategories

Uso:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Descripción:

Outputs a list of all registered jei categories to the crafttweaker.log file.  
Requires JEI to be installed (surprise)!

## Json

Uso:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Descripción:

Prints the nbt of the item in your hand as JSON to the chat.  
This format differs from the IData formatting CraftTweaker uses.  
You can click it to be copied to your clipboard.  
You can also privide the `escaped` argumetn to automatically escape the resulting string.

## Liquids

Uso:

`/crafttweaker liquids`

`/ct liquids`

Descripción:

Outputs a list of all the liquids in the game to the crafttweaker.log file.

## Log

Uso:

`/crafttweaker log`

`/ct log`

Descripción:

Sends a clickable link to open the crafttweaker.log.

## Mods

Uso:

`/crafttweaker mods`

`/ct mods`

Descripción:

Outputs a list of all the mods and their versions in the game to the crafttweaker.log file and prints it in chat.

## Nombres

Uso:

`/crafttweaker names [category]`

`/ct names [category]`

Descripción:

Outputs a list of all the items in the game to the crafttweaker.log file.  
The `category` argument is optional and will extend the list with the according information:

* burntime
* creativetabs
* damageable
* display
* encantabilidad
* foodvalue
* maxdamage
* maxstack
* maxuse
* modid
* rareza
* repairable
* repaircost
* saturationvalue
* unloc

You can also see all the available parameters using the TAB-Key autocompletion feature.

## Nbt

Uso:

`/crafttweaker nbt`

`/ct nbt`

Descripción:

Outputs the NBT of the block you are looking at or the item you are holding to the crafttweaker.log file.

## OreDict

Uso:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Descripción:

Outputs a list of all the OreDict entries in the game to the crafttweaker.log file.

If a name is supplied, the names of all the items registered to the oredict will be outputted to the crafttweaker.log file.

## Potions

Uso:

`/crafttweaker potions`

`/ct potions`

Descripción:

Outputs a list of all the potions in the game to the crafttweaker.log file.

## RecipeNames

Uso:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Descripción:

Outputs a list of all recipe names in the game to the crafttweaker.log file.  
A modid can be provided to filter results.

## Recipes

Uso:

`/crafttweaker recipes`

`/ct recipes`

Descripción:

Outputs a list of all the crafting recipes in the game to the crafttweaker.log file.

## Recipes (Hand)

Uso:

`/crafttweaker recipes hand`

`/ct recipes hand`

Descripción:

Outputs a list of all the crafting recipes for the item in the player's hand in the game to the crafttweaker.log file.

## Recipes (Furnace)

Uso:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

Descripción:

Outputs a list of all the furnace recipes in the game to the crafttweaker.log file.

## Escrituras

Uso:

`/crafttweaker scripts`

`/ct scripts`

Descripción:

Sends a clickable link to open the scripts directory.  
Can also be executed from a command line which instead prints the absolute path to the directory to the log.

## Seeds

Uso:

`/crafttweaker seeds`

`/ct seeds`

Descripción:

Outputs a list of all the items in the seed registry to the crafttweaker.log file.

## Síntesis

Uso:

`/crafttweaker syntax`

`/ct syntax`

Descripción:

Reads through all your scripts and will output all errors it finds in your syntaxes. Note that this won't apply your script changes, you need to restart your game to see them in effect.

## Wiki

Uso:

`/crafttweaker wiki`

`/ct wiki`

Descripción:

Opens your browser to this wiki page (same as `/ct docs`).

## ZsLint

Uso:

`/crafttweaker zslint`

`/ct zslint`

Descripción:

Starts the zslint socket.