# 命令

CraftTweaker 添加了一些命令，这些命令可以帮助你创建脚本，并减少编写脚本的开发时间。

命令的前缀是： `/crafttweaker` 或 `/ct`

你也可以使用这些别名： `/minetweaker` 或 `/mt`

游戏中的所有命令都可以通过以下方式找到:

`/crafttweaker help`

或者

`/ct help`

# 命令列表

## 生物群系

用法：

`/crafttweaker biomes`

`/ct biomes`

说明:

列出游戏中的所有生物群系。

## 生物群系类型

用法：

`/crafttweaker biomeTypes`

`/ct biomeTypes`

说明:

列出游戏中的所有生物群系类型。

## 方块信息

用法：

`/crafttweaker blockinfo`

`/ct blockinfo`

说明：

启用或禁用方块信息读取器。 在启用方块信息模式下，右键点击方块，将输出方块的名称、元数据和 TileEntity 数据。

## 方块

用法：

`/crafttweaker blocks`

`/ct blocks`

说明：

将游戏中所有的方块名称输出到 crafttweaker.log 文件中。

## 问题追踪

用法：

`/crafttweaker bugs`

`/ct bugs`

说明：

在浏览器中打开 GitHub 错误跟踪器。

## 合成表冲突

用法：

`/crafttweaker conflict`

`/ct conflict`

说明：

将所有冲突的合成表配方输出至 crafttweaker.log 文件中。  
请注意，这只适用于安装了 JEI 的客户端！

## Discord

用法：

`/crafttweaker discord`

`/ct discord`

说明：

在浏览器中打开 [Discord 服务器](https://www.discord.blamejared.com)。

## 文档

用法：

`/crafttweaker docs`

`/ct docs`

说明：

在浏览器中打开这个文档页面 (与 `/ct wiki` 相同)。

## 导出脚本修改内容

用法：

`/crafttweaker dumpzs`

`/ct dumpzs`

说明：

在你的Minecraft目录中输出一个 ZenScript 转储到一个 craftfiner_dump 文件夹作为HTML文件。  
您可以使用一个或多个将被连续执行的转储目标(如果您提供了两次目标将运行两次)。  
目标可以使用自动完成 (标签键) 找到。  
默认情况下 `日志`, `html` 和 `json` 已注册为目标。  
这将包括所有注册的 Backet 处理器、ZenTypes, Global Functions, ZenExpansions 所有注册包，包括他们的方法。  
注意并非所有这些都可以从脚本中使用！

## 实体

用法：

`/手工艺较弱实体`

`/ctt 实体`

描述：

将游戏中所有实体的列表导出到 crafttweaper.log 文件。

## 赠送物品

用法：

`/crafttbelower get <minecraft:bedrock>`

`/ct gives <minecraft:bedrock>`

描述：

使用 Crt's Backet 处理器语法给玩家一个物品。  
你也可以通过附加一个 `来应用标签。 ithTag()` 通话。  
注意，这是一个相当简单的解析器，不能适用于每个案例！

## 手

用法：

`/crafttweaker hand`

`/ct 手`

描述：

将手中物品的名称打印到聊天室。

同时复制名称到剪贴板并打印oredict 条目。

## 库存

用法：

`/craftbelown 背包`

`/ct库存`

描述：

将你物品栏中所有物品的列表导出到 crafttweaper.log 文件。

## Jei类别

用法：

`/craftbelower jeiaries`

`/ct jei类别`

描述：

输出所有注册jei类别的列表到craftminstruer.log 文件。  
需要安装 JEI (意外)！

## Json

用法：

`/craftbinevel json` `/crafttbinevel json 逃脱`

`/ct json` `/ct json 逃脱`

描述：

将你手中的物品的忍者打印为 JSON 到聊天室。  
此格式不同于IData 格式的 CraftTsinple 用途。  
您可以点击它复制到剪贴板。  
您也可以根据 `逃脱` 参数自动逃脱生成的字符串。

## 流动资金

用法：

`/crafttweaker liquids`

`/ct液体`

描述：

将游戏中所有液体的列表导出到craftweaker.log 文件中。

## 日志

用法：

`/craftbelown 日志`

`/ct 日志`

描述：

发送一个可点击的链接来打开 crafttweaker.log。

## 模组

用法：

`/crafttweaker mods`

`/ct模组`

描述：

输出游戏中所有模组及其版本的列表到craftbiner.log 文件并在聊天中打印它。

## 名称

用法：

`/crafttweaker names [category]`

`/ct 名称 [category]`

描述：

将游戏中所有项目的列表导出到craftminstrer.log 文件。  
`类别` 是可选的，并将通过提供信息扩展列表：

* 烧毁时间
* 创建标签
* 可造成伤害
* 显示
* 附魔性
* 食物价值
* maxdamage
* maxstack
* maxuse
* 莫多德
* 稀有度
* 可修复
* 修理费用
* 饱和度
* unloc

您也可以使用TAB-Key 自动补全功能查看所有可用参数。

## 南特

用法：

`/crafttweaker nbt`

`/ctt nbt`

描述：

输出您正在查看的方块的NBT或您正在持有的项目到 craftminstruer.log 文件。

## 奥雷迪尔特

用法：

`/crafttweaker oredict <name>`

`/ctt oredict <name>`

描述：

将游戏中所有的 OreDict 条目列表导出到craftweaker.log 文件。

如果提供了一个名字，所有注册到oredic的项目的名称将会被输出到craftweaker.log 文件中。

## 药水

用法：

`/手工艺较弱药水`

`/ct药水`

描述：

将游戏中所有药水的列表导出到craftweaper.log 文件中。

## 食谱名称

用法：

`/craftbelown recipedname`  
`/crafttbinever recipename [modid]`

`/ct 累计名称`  
`/ct累计名称 [modid]`

描述：

将游戏中所有配方名称列表导出到 craftminstruer.log 文件。  
可以为筛选结果提供月经。

## 配方

用法：

`/crafttbelower 配方`

`/ct配方`

描述：

输出游戏中所有制造配方的列表到craftmilower.log 文件。

## 配方(Hand)

用法：

`/crafttbelower 配方手`

`/ct配方手`

描述：

将游戏中玩家手中的项目的所有制造配方列表输出到craftminstruer.log 文件。

## 配方(熔炉)

用法：

`/craftbelower 配方熔化`

`/ct配方熔化`

描述：

输出游戏中所有熔炉配方的列表到craftminstrer.log 文件。

## 脚本

用法：

`/crafttweaker scripts`

`/ct脚本`

描述：

发送可点击链接打开脚本目录。  
也可以从命令行执行，而是将绝对路径打印到日志目录。

## 种子

用法：

`/手工弱化种子`

`/ct种种子`

描述：

将种子注册表中所有项目的列表导出到 crafttweaper.log 文件。

## 语句

用法：

`/crafttweaker syntax`

`/ct语法`

描述：

读取所有脚本并输出在您的语法中发现的所有错误。 请注意这不会应用您的脚本更改，您需要重新启动您的游戏才能看到它们生效。

## 维基

用法：

`/crafttweaker wiki`

`/ctt wiki`

描述：

打开您的浏览器到这个wiki页面(与 `/ct docs` 相同)。

## ZsLint

用法：

`/crafttweaker zslint`

`/ct zslint`

描述：

启动 zslint 套接字。