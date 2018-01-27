# Commands

Crafttweaker adds commands that will help you with the creation of scripts, they are provided to help reduce the development time of writing scripts.

The prefix for commands are:
`/crafttweaker`
or
`/ct`

You can also use one of these aliases:
`/minetweaker` or `/mt`

All the commands can be found ingame by doing:

`/crafttweaker help`

or

`/ct help`

# List of commands

## Biomes

Usage:

`/crafttweaker biomes`

`/ct biomes`

Description:

Lists all of the biomes that are in the game.

## BlockInfo

Usage:

`/crafttweaker blockinfo`

`/ct blockinfo`

Description:

Activates or deactivates the block reader. In block info mode, right-clicking a block will tell you it's name, metadata and Tile Entity data if applicable.

## Blocks

Usage:

`/crafttweaker blocks`

`/ct blocks`

Description:

Outputs a list of all the blocks in the game to the crafttweaker.log file.

## Bugs

Usage:

`/crafttweaker bugs`

`/ct bugs`

Description:

Opens your browser with the GitHub bug tracker.


## Conflict

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

Opens your browser with a link to the Discord server.

## DumpZs

Usage:

`/crafttweaker dumpzs`
`/crafttweaker dumpzs PATH`

`/ct dumpzs`
`/ct dumpzs PATH`


Description:

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
Alternatively, you can provide a filepath to tell CT where to generate the dump. The Path can either be absolute or relative to your Minecraft root folder.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!


## Entities

Usage:

`/crafttweaker entities`

`/ct entities`

Description:

Outputs a list of all the entities in the game to the crafttweaker.log file.


## Hand

Usage:

`/crafttweaker hand`

`/ct hand`

Description:

Prints the name of the item in your hand to the chat. 

Also copies the name to clipboard and prints oredict entries.

## Inventory

Usage:

`/crafttweaker inventory`

`/ct inventory`

Description:

Outputs a list of all the items in your inventory to the crafttweaker.log file.

## Liquids

Usage:

`/crafttweaker liquids`

`/ct liquids`

Description:

Outputs a list of all the liquids in the game to the crafttweaker.log file.

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

* creativetabs
* damageable
* display
* maxdamage
* maxstack
* maxuse
* modid
* rarity
* repairable
* repaircost
* unloc

You can also see all the available parameters using the TAB-Key autocompletion feature.


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

Reads through all your scripts and will output all errors it finds in your syntaxes.
Note that this won't apply your script changes, you need to restart your game to see them in effect.

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

Description:

Opens your browser to this wiki page.