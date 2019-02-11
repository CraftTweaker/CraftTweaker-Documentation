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

## 方块信息

用法：

`/crafttweaker blockinfo`

`/ct blockinfo`

说明:

启用或禁用方块读取。 在启用方块信息模式下，右键点击方块，将输出方块的名称、元数据和Tile实体数据。

## 所有的方块信息

用法：

`/crafttweaker blocks`

`/ct blocks`

说明:

将游戏中所有的方块名称输出到crafttweaker.log文件中

## Bugs

Usage:

`/crafttweaker bugs`

`/ct bugs`

Description:

Opens your browser with the GitHub bug tracker.

## 合成表冲突

Usage:

`/crafttweaker conflict`

`/ct conflict`

Description:

将所有相互冲突的合成表配方的列表输出crafttweaker.log文件中   
请注意, 这只适用于安装了 jei 的客户端!

## Discord

Usage:

`/crafttweaker discord`

`/ct discord`

Description:

Opens your browser with a link to the Discord server.

## DumpZs

Usage:

`/crafttweaker dumpzs` `/crafttweaker dumpzs PATH`

`/ct dumpzs` `/ct dumpzs PATH`

Description:

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
Alternatively, you can provide a filepath to tell CT where to generate the dump. 路径可能是绝对的，或者相对于您的 Minecraft 根目录。  
将包括所有注册的 Bratcket Handers, ZenType, 全局函数, Zennexands 和所有已注册的包，包括它们的方法。  
注意，并非所有这些都可以在脚本中使用！

## 实体

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

Reads through all your scripts and will output all errors it finds in your syntaxes. Note that this won't apply your script changes, you need to restart your game to see them in effect.

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

Description:

Opens your browser to this wiki page.