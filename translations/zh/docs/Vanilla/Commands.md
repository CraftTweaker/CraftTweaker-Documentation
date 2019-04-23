# 命令

Crafttweaker添加了一些命令, 这些命令将帮助您创建脚本, 这些命令旨在帮助减少编写脚本的开发时间。

命令的前缀是： `/crafteraker` 或 `/ct`

您也可以使用这些别名： `/mineraker` 或 `/mt`

游戏中的所有命令都可以通过以下方式找到:

`/crafttweaker help`

或者

`/ct help`

# 命令列表

## 生物群落

用法：

`/crafttweaker biomes`

`/ct biomes`

说明:

列出游戏中的所有生物群落。

## BiomeTypes

用法：

`/crafttweaker biomeTypes`

`/ct biomeTypes`

说明:

Lists all of the biomeTypes that are in the game.

## BlockInfo

用法：

`/crafttweaker blockinfo`

`/ct blockinfo`

说明:

Activates or deactivates the block reader. In block info mode, right-clicking a block will tell you it's name, metadata and Tile Entity data if applicable.

## Blocks

用法：

`/crafttweaker blocks`

`/ct blocks`

Description:

Outputs a list of all the blocks in the game to the crafttweaker.log file.

## Bugs

用法：

`/crafttweaker bugs`

`/ct bugs`

Description:

Opens your browser with the GitHub bug tracker.

## Conflict

用法：

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

Opens your browser with a link to [the Discord server](https://www.discord.blamejared.com).

## Docs

Usage:

`/crafttweaker docs`

`/ct docs`

Description:

Opens your browser to this docs page (same as `/ct wiki`).

## DumpZs

Usage:

`/crafttweaker dumpzs`

`/ct dumpzs`

Description:

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
You can use one or more dump targets that will be executed consecutively (if you provide a target twice it will run twice).  
The targets can be found using auto-complete (tab key).  
By default `log`, `html` and `json` are registered as targets.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!

## Entities

Usage:

`/crafttweaker entities`

`/ct entities`

Description:

Outputs a list of all the entities in the game to the crafttweaker.log file.

## Give Item

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

Prints the name of the item in your hand to the chat.

Also copies the name to clipboard and prints oredict entries.

## Inventory

Usage:

`/crafttweaker inventory`

`/ct inventory`

Description:

Outputs a list of all the items in your inventory to the crafttweaker.log file.

## JeiCategories

Usage:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Description:

Outputs a list of all registered jei categories to the crafttweaker.log file.  
Requires JEI to be installed (surprise)!

## Json

Usage:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Description:

Prints the nbt of the item in your hand as JSON to the chat.  
This format differs from the IData formatting Crafttweaker uses.  
You can click it to be copied to your clipboard.  
You can also privide the `escaped` argumetn to automatically escape the resulting string.

## Liquids

Usage:

`/crafttweaker liquids`

`/ct liquids`

Description:

Outputs a list of all the liquids in the game to the crafttweaker.log file.

## Log

Usage:

`/crafttweaker log`

`/ct log`

Description:

Sends a clickable link to open the crafttweaker.log.

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

## Scripts

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