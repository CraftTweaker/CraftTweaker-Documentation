# Ore 词库处理器

Ore字典板块处理程序让您能够访问游戏中的Ore字典。

Ore 词典处理程序如此引用：

```zenscript
<ore:orename>
<ore:ingotIron>
```

返回 [IOreDictentre](/Vanilla/OreDict/IOreDictEntry/)，只要没有 `*` 正在拨打， 否则返回一个 `列表<IOreDictEntry>` 如果操作词典尚未在游戏中， 将创建一个带有给定名称的新的空的 oreDictionary 并返回它。 请参阅 [Ore 词典](/Vanilla/OreDict/IOreDictEntry/) 条目，了解如何处理它们。

# 获取所有注册矿石字典

您可以使用以下命令将所有注册的矿石字典输出到 CraftTinline日志

    /ct oredict
    /crafttweaker oredict