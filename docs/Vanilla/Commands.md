# 命令

Crafttweaker 添加了一些便于制作脚本的命令，能够有效的减少制作脚本的时间。

命令前缀一般如下：
`/crafttweaker`
或者
`/ct`

当然，你也可以使用 MineTweaker 中曾经使用的前缀：
`/minetweaker` 或者 `/mt`

在游戏中输入如下指令，能够看到所有指令的说明：

`/crafttweaker help`

或者

`/ct help`

# 命令列表

## Biomes

用法：

`/crafttweaker biomes`

`/ct biomes`

简介：

列出游戏中所有的生物群系。

## BlockInfo

用法：

`/crafttweaker blockinfo`

`/ct blockinfo`

简介：

Activates or deactivates the block reader. In block info mode, right-clicking a block will tell you it's name, metadata and Tile Entity data if applicable.

## Blocks

用法：

`/crafttweaker blocks`

`/ct blocks`

简介：

在 crafttweaker.log 文件中输出游戏中所有的方块名称。

## Bugs

用法：

`/crafttweaker bugs`

`/ct bugs`

简介：

在浏览器中打开 GitHub bug 汇报界面。


## Conflict

用法：

`/crafttweaker conflict`

`/ct conflict`

简介：

在 crafttweaker.log 文件中输出游戏中所有冲突的合成表。  
谨记这个指令只在客户端，并且装有 JEI 的情况下才会工作！

## Discord

用法：

`/crafttweaker discord`

`/ct discord`

简介：

在浏览器中打开 Discord 服务器邀请链接。

## DumpZs

用法：

`/crafttweaker dumpzs`
`/crafttweaker dumpzs PATH`

`/ct dumpzs`
`/ct dumpzs PATH`


简介：

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
Alternatively, you can provide a filepath to tell CT where to generate the dump. The Path can either be absolute or relative to your Minecraft root folder.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!


## Entities

用法：

`/crafttweaker entities`

`/ct entities`

简介：

在 crafttweaker.log 文件中输出游戏中所有实体名称。


## Hand

用法：

`/crafttweaker hand`

`/ct hand`

简介：

在聊天栏中输出手持物品名称。

同时还会将物品名称和矿物词典等条目复制进系统的剪贴板。

## Inventory

用法：

`/crafttweaker inventory`

`/ct inventory`

简介：

在 crafttweaker.log 文件中输出游戏中你物品栏中所有的物品名称。

## Liquids

用法：

`/crafttweaker liquids`

`/ct liquids`

简介：

在 crafttweaker.log 文件中输出游戏中所有流体名称。

## Mods

用法：

`/crafttweaker mods`

`/ct mods`

简介：

在 crafttweaker.log 文件中输出游戏中所有模组名称和版本信息，同时会输出在聊天栏。

## Names

用法：

`/crafttweaker names [category]`

`/ct names [category]`

简介：

在 crafttweaker.log 文件中输出游戏中所有物品名称。  
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

用法：

`/crafttweaker oredict <name>`

`/ct oredict <name>`

简介：

在 crafttweaker.log 文件中输出游戏中所有OreDict entries

If a name is supplied, the names of all the items registered to the oredict will be outputted to the crafttweaker.log file.

## Potions

用法：

`/crafttweaker potions`

`/ct potions`

简介：

在 crafttweaker.log 文件中输出游戏中所有potions


## Recipes

用法：

`/crafttweaker recipes`

`/ct recipes`

简介：

在 crafttweaker.log 文件中输出游戏中所有crafting recipes

## Recipes (Hand)

用法：

`/crafttweaker recipes hand`

`/ct recipes hand`

简介：

在 crafttweaker.log 文件中输出游戏中所有crafting recipes for the item in the player's hand

## Recipes (Furnace)

用法：

`/crafttweaker recipes furnace`

`/ct recipes furnace`

简介：

在 crafttweaker.log 文件中输出游戏中所有furnace recipes

## Seeds

用法：

`/crafttweaker seeds`

`/ct seeds`

简介：

Outputs a list of all the items in the seed registry to the crafttweaker.log file.

## Syntax

用法：

`/crafttweaker syntax`

`/ct syntax`

简介：

Reads through all your scripts and will output all errors it finds in your syntaxes.
Note that this won't apply your script changes, you need to restart your game to see them in effect.

## Wiki

用法：

`/crafttweaker wiki`

`/ct wiki`

简介：

Opens your browser to this wiki page.
