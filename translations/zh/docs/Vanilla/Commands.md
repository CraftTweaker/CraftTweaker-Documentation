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

将手中的物品信息输出到聊天栏中。

也可以将物品名称复制到剪切板，并且输出物品的矿物词典条目.

## 物品栏

Usage:

`/crafttweaker inventory`

`/ct inventory`

Description:

将玩家背包中所有的物品信息输出到crafttweaker.log文件中。包括身上的装备栏。

## 液体:

Usage:

`/crafttweaker liquids`

`/ct liquids`

Description:

将游戏中所有的液体信息输出到crafttweaker.log文件中

## Mods

Usage:

`/crafttweaker mods`

`/ct mods`

Description:

将所有模组的列表及其游戏中的版本输出到crafttweaker.log文件和聊天栏中。

## Names

Usage:

`/crafttweaker names [category]`

`/ct names [category]`

Description:

将游戏中所有物品按照category参数输出到craftweaker.log文件。  
`category`参数是可选的，将使用相应的信息扩展列表：

* creativetabs 创造模式中物品所在的列表
* damageable 是否有耐久
* display 显示所有的物品的信息
* maxdamage 最大耐久
* maxstack 最大堆叠
* maxuse
* modid
* rarity 稀有度
* repairable 是否可修复
* repaircost
* unloc

您也可以通过TAB按键自动匹配功能查看所有可用的参数。

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

将游戏中所有的合成表信息输出到crafttweaker.log文件中

## Recipes (Hand)

Usage:

`/crafttweaker recipes hand`

`/ct recipes hand`

Description:

输出游戏中玩家手上物品的所有制作配方列表到crafttweaker.log文件和聊天栏中

## Recipes (Furnace)

Usage:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

Description:

将游戏中所有熔炉配方的列表输出到craftweaker.log文件。

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

读取所有脚本，并输出在语法中发现的所有错误。 请注意，这不会应用您的脚本更改，您需要重新启动游戏才能看到它们生效。

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

Description:

Opens your browser to this wiki page.