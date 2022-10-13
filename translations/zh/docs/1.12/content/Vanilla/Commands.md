# 命令

CraftTweaker 添加了一些命令，这些命令可以帮助你创建脚本，并减少编写脚本的开发时间。

命令的前缀是： `/crafttweaker` 或 `/ct`

你也可以使用这些别名： `/minetweaker` 或 `/mt`

游戏中的所有命令都可以通过以下方式找到:

`/crafttweaker help`

或者

`/ct help
#显示帮助信息`

# 命令列表

## 生物群系

Usage:

`/crafttweaker biomes`

`/ct biomes`

说明：

列出游戏中的所有生物群系。

## 生物群系类型

Usage:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

说明：

列出游戏中的所有生物群系类型。

## 方块信息

Usage:

`/crafttweaker blockinfo`

`/ct blockinfo`

说明：

启用或禁用方块信息读取器。 在启用方块信息模式下，右键点击方块，将输出方块的名称、元数据和 TileEntity 数据。

## 方块

Usage:

`/crafttweaker blocks`

`/ct blocks`

说明：

将游戏中所有的方块名称输出到 crafttweaker.log 文件中。

## 问题追踪

Usage:

`/crafttweaker bugs`

`/ct bugs`

说明：

在浏览器中打开 GitHub 错误跟踪器。


## 合成表冲突

Usage:

`/crafttweaker conflict`

`/ct conflict`

说明：

Outputs a list of all conflicting crafting table recipes to the crafttweaker.log file.  
Note that this only works on a CLIENT with JEI installed!

## Discord

Usage:

`/crafttweaker discord`

`/ct discord
#打开CT的官方discord频道`

说明：

在浏览器中打开 [Discord 服务器](https://www.discord.blamejared.com)。

## 文档

Usage:

`/crafttweaker docs`

`/ct docs`

说明：

在浏览器中打开这个文档页面 (与 `/ct wiki` 相同)。

## 导出脚本修改内容

Usage:

`/crafttweaker dumpzs`

`/ct dumpzs`


说明：

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

说明：

Outputs a list of all the entities in the game to the crafttweaker.log file.


## Give Item

Usage:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

说明：

Gives the player the item using CrT's Bracket handler syntax.  
You can also apply tags by appending a `.withTag()` call.  
Note that this is a pretty simple parser and may not work for every case!


## Hand

Usage:

`/crafttweaker hand`

`/ct hand
#查看自己手上所拿着物品的id及其nbt标签(如果有的话)`

说明：

Prints the name of the item in your hand to the chat.

Also copies the name to clipboard and prints oredict entries.

## Inventory

Usage:

`/crafttweaker inventory`

`/ct inventory`

说明：

Outputs a list of all the items in your inventory to the crafttweaker.log file.


## JeiCategories

Usage:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

说明：

Outputs a list of all registered jei categories to the crafttweaker.log file.  
Requires JEI to be installed (surprise)!


## Json

Usage:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

说明：

Prints the nbt of the item in your hand as JSON to the chat.  
This format differs from the IData formatting CraftTweaker uses.  
You can click it to be copied to your clipboard.  
You can also privide the `escaped` argumetn to automatically escape the resulting string.

## Liquids

Usage:

`/crafttweaker liquids`

`/ct liquids`

说明：

Outputs a list of all the liquids in the game to the crafttweaker.log file.

## Log

Usage:

`/crafttweaker log`

`/ct log
#查看mod所生成的日志`

说明：

Sends a clickable link to open the crafttweaker.log.

## Mods

Usage:

`/crafttweaker mods`

`/ct mods`

说明：

Outputs a list of all the mods and their versions in the game to the crafttweaker.log file and prints it in chat.

## Names

Usage:

`/crafttweaker names [category]`

`/ct names [category]`

说明：

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

说明：

Outputs the NBT of the block you are looking at or the item you are holding to the crafttweaker.log file.


## OreDict

Usage:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

说明：

Outputs a list of all the OreDict entries in the game to the crafttweaker.log file.

If a name is supplied, the names of all the items registered to the oredict will be outputted to the crafttweaker.log file.

## Potions

Usage:

`/crafttweaker potions`

`/ct potions`

说明：

Outputs a list of all the potions in the game to the crafttweaker.log file.

## RecipeNames

Usage:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

说明：

Outputs a list of all recipe names in the game to the crafttweaker.log file.  
A modid can be provided to filter results.

## Recipes

Usage:

`/crafttweaker recipes`

`/ct recipes`

说明：

Outputs a list of all the crafting recipes in the game to the crafttweaker.log file.

## Recipes (Hand)

Usage:

`/crafttweaker recipes hand`

`/ct recipes hand`

说明：

Outputs a list of all the crafting recipes for the item in the player's hand in the game to the crafttweaker.log file.

## Recipes (Furnace)

Usage:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

说明：

Outputs a list of all the furnace recipes in the game to the crafttweaker.log file.

## 脚本

Usage:

`/crafttweaker scripts`

`/ct scripts
#打开游戏目录下的scripts文件夹`

说明：

Sends a clickable link to open the scripts directory.  
Can also be executed from a command line which instead prints the absolute path to the directory to the log.


## Seeds

Usage:

`/crafttweaker seeds`

`/ct seeds`

说明：

Outputs a list of all the items in the seed registry to the crafttweaker.log file.

## 语句

Usage:

`/crafttweaker syntax`

`/ct syntax`

说明：

Reads through all your scripts and will output all errors it finds in your syntaxes. Note that this won't apply your script changes, you need to restart your game to see them in effect.

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

说明：

Opens your browser to this wiki page (same as `/ct docs`).

## ZsLint

Usage:

`/crafttweaker zslint`

`/ct zslint`

说明：

Starts the zslint socket.