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

## 生物群系

用法：

`/crafttweaker biomes`

`/ct biomes`

简介：

列出游戏中所有的生物群系。

## 方块信息

用法：

`/crafttweaker blockinfo`

`/ct blockinfo`

简介：

启动或关闭方块阅读器。在此模式下，右击一个方块会告诉你它的名称，元数据和方块实体值（如果存在）。

## 方块

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


## 合成冲突

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

在minecraft目录的crafttweaker_dump文件夹内输出一个ZenScrcit的HTML文件.
另外，你也可以自己给CT提供一个路径。路径可以是绝对路径或以Minecraft为根目录的相对路径。
这将包括所有注册过的尖括号引用、ZenType、全局函数、ZenExpansion和所有注册过的相关包和方法。
注意以上内容只有部分可以用在脚本中!


## 实体

用法：

`/crafttweaker entities`

`/ct entities`

简介：

在 crafttweaker.log 文件中输出游戏中所有实体名称。


## 手持物品

用法：

`/crafttweaker hand`

`/ct hand`

简介：

在聊天栏中输出手持物品名称。

同时还会将物品名称和矿物词典等条目复制进系统的剪贴板。

## 物品栏

用法：

`/crafttweaker inventory`

`/ct inventory`

简介：

在 crafttweaker.log 文件中输出游戏中你物品栏中所有的物品名称。

## 流体

用法：

`/crafttweaker liquids`

`/ct liquids`

简介：

在 crafttweaker.log 文件中输出游戏中所有流体名称。

## 模组

用法：

`/crafttweaker mods`

`/ct mods`

简介：

在 crafttweaker.log 文件中输出游戏中所有模组名称和版本信息，同时会输出在聊天栏。

## 名称

用法：

`/crafttweaker names [类别]`

`/ct names [类别]`

简介：

在 crafttweaker.log 文件中输出游戏中所有物品名称。  
`类别` 参数是可选的，能够额外显示如下信息：

* creativetabs（创造模式标签页）
* damageable（是否有耐久）
* display（显示名称）
* maxdamage（最大耐久）
* maxstack（最大堆叠数）
* maxuse（最大使用次数）
* modid（模组id）
* rarity（稀有度）
* repairable（是否可修复）
* repaircost（修复花费）
* unloc（语言文件 key）

使用 Tab 键能够自动补全参数，你能够看到所有可用参数。


## 矿物词典

用法：

`/crafttweaker oredict <名称>`

`/ct oredict <名称>`

简介：

在 crafttweaker.log 文件中输出游戏中所有矿物词典条目

如果提供了名称，那么这个物品的所有的矿物词典名称会全部输出在 crafttweaker.log 文件中。

## 药水

用法：

`/crafttweaker potions`

`/ct potions`

简介：

在 crafttweaker.log 文件中输出游戏中所有药水名称。


## 合成表

用法：

`/crafttweaker recipes`

`/ct recipes`

简介：

在 crafttweaker.log 文件中输出游戏中所有合成表。

## 合成表（手持物品）

用法：

`/crafttweaker recipes hand`

`/ct recipes hand`

简介：

在 crafttweaker.log 文件中输出游戏中玩家手持物品的所有合成表

## 合成表（熔炉）

用法：

`/crafttweaker recipes furnace`

`/ct recipes furnace`

简介：

在 crafttweaker.log 文件中输出游戏中所有熔炉合成表。

## 种子

用法：

`/crafttweaker seeds`

`/ct seeds`

简介：

在 crafttweaker.log 中输出所有注册了的打草掉落的种子列表。

## 语法检查

用法：

`/crafttweaker syntax`

`/ct syntax`

简介：

全部读取一遍脚本，并输出所有发现的语法错误。  
谨记这个指令并不能启用修改，你还是需要重启游戏才可以启用修改。

## Wiki

用法：

`/crafttweaker wiki`

`/ct wiki`

简介：

打开浏览器，并跳转到这个 wiki 界面。
